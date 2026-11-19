"""Fast syntax/configuration validation; no application test suite or image publication."""
import ast
from pathlib import Path
import subprocess
import yaml

for file in Path('.github/workflows').glob('*.y*ml'):
    workflow = yaml.safe_load(file.read_text())
    assert isinstance(workflow.get('jobs'), dict), file
    for job in workflow['jobs'].values():
        for step in job.get('steps', []):
            if 'run' in step and step.get('shell', 'bash') == 'bash':
                subprocess.run(['bash', '-n'], input=step['run'], text=True, check=True)
for file in Path('.github/scripts').glob('*.py'):
    ast.parse(file.read_text(), filename=str(file))
print('Workflow YAML, shell and Python syntax are valid.')
