import {readFileSync, readdirSync, writeFileSync} from 'node:fs';
import {join, resolve} from 'node:path';

// React 18 streaming SSR can insert NUL bytes at text chunk boundaries:
// https://github.com/react/react/issues/31134
// Keep every other byte unchanged, including literal escaped "\\u0000" examples.
const root = resolve(process.argv[2] ?? 'build');
let pages = 0;
let repaired = 0;
function finalize(directory) {
  for (const entry of readdirSync(directory, {withFileTypes: true})) {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) finalize(file);
    else if (entry.isFile() && entry.name.endsWith('.html')) {
      pages += 1;
      const bytes = readFileSync(file);
      if (bytes.includes(0)) {
        writeFileSync(file, bytes.filter((byte) => byte !== 0));
        repaired += 1;
      }
      if (readFileSync(file).includes(0)) throw new Error(`NUL bytes remain: ${file}`);
    }
  }
}
finalize(root);
if (!pages) throw new Error('No generated HTML pages found');
console.log(`Verified ${pages} HTML pages: zero NUL bytes; repaired ${repaired} streaming SSR artifacts`);
