import {readdirSync, readFileSync, writeFileSync} from 'node:fs';
import {join, resolve} from 'node:path';

const docsRoot = resolve(import.meta.dirname, '../docs/api/modules');

function files(directory) {
  return readdirSync(directory, {withFileTypes: true}).flatMap((entry) => {
    const file = join(directory, entry.name);
    return entry.isDirectory() ? files(file) : entry.name.endsWith('.md') ? [file] : [];
  });
}

for (const file of files(docsRoot)) {
  const current = readFileSync(file, 'utf8');
  const formatted = current.replace(/```json\n([\s\S]*?)\n```/g, (block, source) => {
    try {
      return `\`\`\`json\n${JSON.stringify(JSON.parse(source), null, 2)}\n\`\`\``;
    } catch {
      return block;
    }
  });
  if (formatted !== current) writeFileSync(file, formatted);
}
