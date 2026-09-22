import {readFileSync, readdirSync} from 'node:fs';
import {join, relative, resolve} from 'node:path';

const root = resolve(import.meta.dirname, '..');
const docsRoot = join(root, 'docs');
const routes = JSON.parse(readFileSync(join(root, 'src/generated/api-routes.json'), 'utf8'));
const normalizePath = (path) => path.replace(/\{[^}]+\}/g, '{}').replace(/\/$/, '');
const routeKeys = new Set(routes.map(({method, path}) => `${method.toUpperCase()} ${normalizePath(path)}`));
const failures = [];
let checked = 0;

function markdownFiles(directory) {
  return readdirSync(directory, {withFileTypes: true}).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return markdownFiles(path);
    return /\.mdx?$/.test(entry.name) ? [path] : [];
  });
}

for (const file of markdownFiles(docsRoot)) {
  const content = readFileSync(file, 'utf8');
  const label = relative(root, file);
  const endpointPattern = /`((?:GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS)(?:\|(?:GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS))*)\s+(\/api\/[^`\s]+)`/g;

  for (const match of content.matchAll(endpointPattern)) {
    const [, methods, rawPath] = match;
    if (rawPath.includes('*') || rawPath.includes('?')) continue;
    for (const method of methods.split('|')) {
      checked += 1;
      if (!routeKeys.has(`${method} ${normalizePath(rawPath)}`)) {
        failures.push(`${label}: cari backend-də yoxdur — ${method} ${rawPath}`);
      }
    }
  }
}

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join('\n'));
  process.exitCode = 1;
} else {
  console.log(`API fact audit passed: sənədlərdəki ${checked} dəqiq endpoint istinadı cari route snapshotı ilə üst-üstə düşür.`);
}
