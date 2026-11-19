"""Sequential immutable releases and an explicit Actions -> Freight receipt."""
import argparse
from datetime import datetime, timezone
import json
import os
from pathlib import Path
import re
import subprocess

TAG = re.compile(r'^build-(\d{10})-(\d{3})-([0-9a-f]{12})$')


def command(args):
    return subprocess.check_output(args, text=True).strip()


def release_numbers(tags):
    return [int(m[1]) for tag in tags if (m := TAG.fullmatch(tag))]


def next_number(tag_sets, floor=0):
    return max([floor] + [n for tags in tag_sets for n in release_numbers(tags)]) + 1


def candidate(repo):
    return f'{repo}:candidate-{os.environ["GITHUB_RUN_ID"]}-{os.environ["GITHUB_RUN_ATTEMPT"]}-{os.environ["GITHUB_SHA"][:12]}'


def identity(repos, floor):
    tag_sets = []
    for repo in repos:
        host, registry, name = repo.split('/', 2)
        if host != 'registry.digitalocean.com':
            raise ValueError('Unexpected image registry')
        records = json.loads(command(['doctl', 'registry', 'repository', 'list-tags', name,
                                      '--registry', registry, '--output', 'json']))
        tag_sets.append([r['tag'] for r in records])
    number = next_number(tag_sets, floor)
    attempt = int(os.environ['GITHUB_RUN_ATTEMPT'])
    tag = f'build-{number:010d}-{attempt:03d}-{os.environ["GITHUB_SHA"][:12]}'
    values = {'BUILD_NUMBER': str(number), 'BUILD_TAG': tag,
              'BUILD_CREATED': datetime.now(timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ'),
              'IMAGE': candidate(repos[0])}
    with open(os.environ['GITHUB_ENV'], 'a') as f:
        for k, v in values.items():
            f.write(f'{k}={v}\n')
    print(f'Building build-{number}; Actions run {os.environ["GITHUB_RUN_ID"]}')


def publish(repos):
    tag = os.environ['BUILD_TAG']
    assert TAG.fullmatch(tag)
    base = os.environ.get('GITHUB_SERVER_URL', 'https://github.com')
    source = f'{base}/{os.environ["GITHUB_REPOSITORY"]}'
    run_url = f'{source}/actions/runs/{os.environ["GITHUB_RUN_ID"]}'
    annotations = {'org.opencontainers.image.source': source,
                   'org.opencontainers.image.revision': os.environ['GITHUB_SHA'],
                   'org.opencontainers.image.created': os.environ['BUILD_CREATED'],
                   'az.beinsystems.actions.url': run_url,
                   'az.beinsystems.actions.run-id': os.environ['GITHUB_RUN_ID'],
                   'az.beinsystems.build.number': os.environ['BUILD_NUMBER'],
                   'az.beinsystems.build.attempt': os.environ['GITHUB_RUN_ATTEMPT']}
    # Refuse collisions based on an authenticated registry listing; auth/network errors fail closed.
    for repo in repos:
        _, registry, name = repo.split('/', 2)
        records = json.loads(command(['doctl', 'registry', 'repository', 'list-tags', name,
                                      '--registry', registry, '--output', 'json']))
        if any(r['tag'] == tag for r in records):
            raise ValueError('Release tag already exists: ' + tag)
    images = []
    for repo in repos:
        local = candidate(repo)
        subprocess.run(['docker', 'push', local], check=True)
        digest = command(['docker', 'image', 'inspect', local, '--format', '{{index .RepoDigests 0}}'])
        assert digest.startswith(repo + '@sha256:')
        images.append({'repoURL': repo, 'candidate': digest, 'tag': tag})
    # Metadata lives on the manifest index so Kargo can discover the exact run without GitHub credentials.
    for image in images:
        args = ['docker', 'buildx', 'imagetools', 'create', '--tag', image['repoURL'] + ':' + tag]
        for key, value in annotations.items():
            args += ['--annotation', f'index:{key}={value}']
        subprocess.run(args + [image['candidate']], check=True)
        manifest = json.loads(command(['docker', 'buildx', 'imagetools', 'inspect',
                                      image['repoURL'] + ':' + tag, '--format', '{{json .Manifest}}']))
        image['digest'] = manifest['digest']
    number = int(os.environ['BUILD_NUMBER'])
    attempt = int(os.environ['GITHUB_RUN_ATTEMPT'])
    alias = f'build-{number}' + (f'-r{attempt}' if attempt > 1 else '')
    project = os.environ['KARGO_PROJECT']
    record = {'build': number, 'attempt': attempt, 'alias': alias, 'tag': tag,
              'revision': os.environ['GITHUB_SHA'], 'repository': os.environ['GITHUB_REPOSITORY'],
              'run_id': int(os.environ['GITHUB_RUN_ID']), 'run_url': run_url,
              'created': os.environ['BUILD_CREATED'], 'images': images, 'kargo_project': project}
    Path('release-manifest.json').write_text(json.dumps(record, indent=2) + '\n')
    with open(os.environ['GITHUB_STEP_SUMMARY'], 'a') as f:
        f.write(f'## {alias}\n\n| Build | Freight | Actions | Commit |\n|---|---|---|---|\n'
                f'| {number} | `{project} / {alias}` | [Open run]({run_url}) | '
                f'[{os.environ["GITHUB_SHA"][:12]}]({source}/commit/{os.environ["GITHUB_SHA"]}) |\n\n'
                'Freight appears after Warehouse discovery. Open its Actions build link for this exact run.\n\n')
        for image in images:
            f.write(f'- `{image["repoURL"]}@{image["digest"]}`\n')
    print('Published', alias, 'for Kargo project', project)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('mode', choices=['identity', 'publish'])
    args = parser.parse_args()
    repos = json.loads(os.environ['RELEASE_IMAGES'])
    assert repos and len(set(repos)) == len(repos)
    if args.mode == 'identity':
        identity(repos, int(os.environ.get('BUILD_NUMBER_FLOOR', '0')))
    else:
        publish(repos)
