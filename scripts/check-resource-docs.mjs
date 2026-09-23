import {readFileSync, readdirSync} from 'node:fs';
import {createRequire} from 'node:module';
import {resolve} from 'node:path';

const root = resolve(import.meta.dirname, '..');
const require = createRequire(import.meta.url);
const {isInternalRoute} = require(resolve(root, 'scripts/api-doc-scope.cjs'));
const handAuditedDocs = [
  'docs/api/modules/products/catalog-products.md',
  'docs/api/modules/products/product-templates.md',
  'docs/api/modules/products/categories.md',
  'docs/api/modules/products/units.md',
  'docs/api/modules/products/product-packagings.md',
  'docs/api/modules/products/product-attributes.md',
  'docs/api/modules/sales/sale-orders.md',
  'docs/api/modules/sales/sale-receipts.md',
  'docs/api/modules/purchase/purchase-orders.md',
  'docs/api/modules/purchase/purchase-receipts.md',
];
function markdownFiles(directory) {
  return readdirSync(directory, {withFileTypes: true}).flatMap((entry) => {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) return markdownFiles(path);
    return entry.name.endsWith('.md') ? [path] : [];
  });
}

const moduleResourceDocs = markdownFiles(resolve(root, 'docs/modules'))
  .filter((file) => file.includes('/resources/'))
  .map((file) => file.replace(`${root}/`, ''));
const resourceDocs = [...handAuditedDocs, ...moduleResourceDocs];
const overviewLabels = [
  'Məqsəd və sərhəd',
  'İlkin şərtlər',
  'İş axını',
  'State-lər və biznes təsiri',
  'Əlaqəli resurslar',
  'Əsas məhdudiyyətlər',
];
const failures = [];
const liveRoutes = JSON.parse(readFileSync(resolve(root, 'src/generated/api-routes.json'), 'utf8'));
const normalizePath = (path) => path.replace(/\{[^}]+\}/g, '{}').replace(/\/$/, '');
const liveRouteKeys = new Set(liveRoutes
  .filter(({path}) => !isInternalRoute(path))
  .map(({method, path}) => `${method.toUpperCase()} ${normalizePath(path)}`));
const documentedRouteKeys = new Set();

for (const file of resourceDocs) {
  const content = readFileSync(resolve(root, file), 'utf8');
  const label = file.replace('docs/api/modules/', '');

  for (const heading of overviewLabels) {
    if (!content.includes(`**${heading}.**`)) failures.push(`${label}: “${heading}” icmalı yoxdur.`);
  }
  if (!/^## Field-lər\n[\s\S]*?^\| Field \| Tip \| Məna və istifadə \|/m.test(content)) {
    failures.push(`${label}: standart Field-lər cədvəli yoxdur.`);
  }
  const fieldSection = content.match(/## Field-lər\n([\s\S]*?)\n## Endpointlər/)?.[1] ?? '';
  const fieldNames = [...fieldSection.matchAll(/^\| `([^`]+)` \|/gm)].map((match) => match[1]);
  const duplicateFields = fieldNames.filter((field, index) => fieldNames.indexOf(field) !== index);
  if (duplicateFields.length) failures.push(`${label}: təkrar field sətrləri var: ${[...new Set(duplicateFields)].join(', ')}.`);
  if (/^\| `[^`]+`,\s*`/m.test(fieldSection)) failures.push(`${label}: birdən çox field eyni cədvəl sətrində cəmlənib.`);

  const operationBlocks = content.split(/^### /m).slice(1);
  if (!operationBlocks.length) failures.push(`${label}: endpoint əməliyyatı yoxdur.`);
  for (const block of operationBlocks) {
    const operation = block.split('\n', 1)[0];
    const jsonBlocks = [...block.matchAll(/```json\n([\s\S]*?)\n```/g)];
    if (!block.includes('**Endpoint**') || !block.includes('**Request JSON**') || !block.includes('**Response JSON') || jsonBlocks.length < 2) {
      failures.push(`${label}: “${operation}” ayrıca endpoint/request/response JSON şablonunu tamamlamır.`);
    }
    for (const [, source] of jsonBlocks) {
      try {
        const payload = JSON.parse(source);
        if (jsonBlocks.indexOf(jsonBlocks.find((item) => item[1] === source)) === 0) {
          for (const key of ['headers', 'path', 'query', 'body']) {
            if (!(key in payload)) failures.push(`${label}: “${operation}” request JSON-da “${key}” obyekti yoxdur.`);
          }
        }
      } catch (error) {
        failures.push(`${label}: “${operation}” etibarsız JSON saxlayır: ${error.message}`);
      }
      if (!source.includes('\n')) failures.push(`${label}: “${operation}” JSON nümunəsi bir sətirdədir.`);
    }

    const endpoint = block.match(/\*\*Endpoint\*\*\s*·\s*`([A-Z|]+)\s+(\/api\/[^`]+)`/);
    if (!endpoint) {
      failures.push(`${label}: “${operation}” endpoint sətri oxuna bilmir.`);
      continue;
    }

    const [, methods, path] = endpoint;
    for (const method of methods.split('|')) {
      const key = `${method} ${normalizePath(path)}`;
      documentedRouteKeys.add(key);
      if (!liveRouteKeys.has(key)) {
        failures.push(`${label}: “${operation}” cari backend route-u deyil: ${method} ${path}.`);
      }
    }
  }
}

for (const key of liveRouteKeys) {
  if (!documentedRouteKeys.has(key)) failures.push(`Cari backend route-u üçün standart resurs səhifəsi yoxdur: ${key}.`);
}
for (const key of documentedRouteKeys) {
  if (!liveRouteKeys.has(key)) failures.push(`Sənəddə artıq mövcud olmayan route qalıb: ${key}.`);
}

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Resource-document audit passed: ${resourceDocs.length} istifadəçi resurs səhifəsi ${documentedRouteKeys.size} user-facing API əməliyyatını standart request/response blokları ilə əhatə edir.`);
}
