#!/usr/bin/env node

/**
 * Builds the two source-derived reference pages in this repository.
 *
 * Usage: node scripts/generate-reference.mjs --backend ../erp-backend
 *
 * Route files are the API source of truth. Do not hand-edit generated pages:
 * regenerate them after a backend route or model change instead.
 */
import {execFileSync} from 'node:child_process';
import {mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync} from 'node:fs';
import {dirname, join, relative, resolve, sep} from 'node:path';
import {tmpdir} from 'node:os';
import {fileURLToPath} from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');
const backendArgument = process.argv.find((argument) => argument.startsWith('--backend='));
const backend = resolve(root, backendArgument?.slice('--backend='.length) ?? '../erp-backend');

function command(commandName, argumentsList) {
  return execFileSync(commandName, argumentsList, {
    cwd: backend,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  }).trim();
}

function shellQuote(value) {
  return `'${value.replaceAll("'", "'\\\"'\\\"'")}'`;
}

function routeList() {
  // In constrained environments Laravel cannot always write its JSON manifest
  // to a pipe. Redirecting to a temporary regular file is also friendlier to
  // large route tables.
  const artifact = join(tmpdir(), `bein-erp-routes-${process.pid}.json`);
  try {
    execFileSync('bash', ['-lc', `php artisan route:list --json > ${shellQuote(artifact)}`], {
      cwd: backend,
      stdio: 'inherit',
    });
    return JSON.parse(readFileSync(artifact, 'utf8'));
  } finally {
    rmSync(artifact, {force: true});
  }
}

function routePermissions() {
  const artifact = join(tmpdir(), `bein-erp-route-permissions-${process.pid}.json`);
  const exporter = join(root, 'scripts', 'export-route-permissions.php');
  try {
    execFileSync('bash', ['-lc', `php ${shellQuote(exporter)} ${shellQuote(backend)} > ${shellQuote(artifact)}`], {
      cwd: backend,
      stdio: 'inherit',
    });
    return JSON.parse(readFileSync(artifact, 'utf8'));
  } finally {
    rmSync(artifact, {force: true});
  }
}

function write(relativePath, contents) {
  const destination = join(root, relativePath);
  mkdirSync(dirname(destination), {recursive: true});
  writeFileSync(destination, contents);
  return destination;
}

function markdown(value) {
  return String(value ?? '')
    .replaceAll('\\', '\\\\')
    .replaceAll('|', '\\|')
    .replaceAll('\n', ' ')
    .trim();
}

function explodeMethods(method) {
  return method.split('|').filter((item) => item !== 'HEAD');
}

function compactAction(action) {
  if (!action || action === 'Closure') return '`Closure`';
  return `\`${action.replace(/^App\\Application\\Api\\Controllers\\/, '')}\``;
}

function operationName(method, action) {
  const methodName = action?.split('@').at(-1) ?? '';
  const names = {
    index: 'Siyahı oxuyur', show: 'Bir qeydi oxuyur', store: 'Yeni qeyd yaradır',
    update: 'Qeydi yeniləyir', destroy: 'Qeydi silir', create: 'Yaratma formu',
  };
  if (names[methodName]) return names[methodName];
  if (method === 'GET') return 'Məlumatı oxuyur';
  if (method === 'POST') return 'Əməliyyatı başladır';
  if (method === 'DELETE') return 'Qeydi silir';
  return 'Qeydi dəyişir';
}

function access(middleware = []) {
  const joined = middleware.join(' ');
  if (joined.includes('PosDeviceAuthenticateMiddleware')) return 'POS cihaz tokeni';
  if (joined.includes('TenantAuthenticateMiddleware')) {
    return joined.includes('EnforceBranchContextMiddleware') ? 'Tenant Bearer + filial' : 'Tenant Bearer';
  }
  if (joined.includes('auth:')) return 'Autentifikasiya tələb olunur';
  return 'Açıq / route-a görə';
}

function category(route) {
  const action = route.action ?? '';
  const domainMatch = action.match(/Controllers\\([A-Za-z]+)\\/);
  if (domainMatch) {
    const names = {
      Accounting: 'Mühasibat və maliyyə', Ai: 'AI', Auth: 'Platform və giriş',
      BusinessNetwork: 'Biznes şəbəkəsi', BulkOperations: 'Toplu əməliyyatlar', Crm: 'CRM', Hr: 'İnsan resursları',
      Integrations: 'İnteqrasiyalar', Inventory: 'İnventar', Manufacturing: 'İstehsal',
      Partner: 'Tərəfdaşlar', Pos: 'POS', Product: 'Məhsul kataloqu', Purchase: 'Satınalma',
      Reports: 'Hesabatlar', Sales: 'Satış', Stock: 'Anbar və stok', Store: 'Onlayn mağaza', Workflows: 'Workflow',
    };
    return names[domainMatch[1]] ?? domainMatch[1];
  }
  if (route.uri.includes('/pos/')) return 'POS';
  if (route.uri.includes('/bulk/')) return 'Toplu əməliyyatlar';
  if (route.uri.includes('/output') || route.uri.includes('/document-outputs')) return 'Çıxışlar';
  return 'Platform və sistem';
}

const permissionMap = new Map(routePermissions().map((item) => [`${item.method} ${item.uri}`, item]));
const routes = routeList()
  .filter((route) => route.uri.startsWith('api/'))
  .flatMap((route) => explodeMethods(route.method).map((method) => ({...route, method, permission: permissionMap.get(`${method} ${route.uri}`) ?? null})))
  .sort((left, right) => category(left).localeCompare(category(right), 'az') || left.uri.localeCompare(right.uri) || left.method.localeCompare(right.method));
const uniqueRouteCount = new Set(routes.map((route) => route.uri)).size;

const revision = command('git', ['rev-parse', '--short', 'HEAD']);
const hasUncommittedBackendChanges = Boolean(command('git', ['status', '--porcelain']));
const snapshotLabel = hasUncommittedBackendChanges
  ? `backend commit \`${revision}\` + commit olunmamış işçi-ağacı dəyişiklikləri`
  : `backend commit \`${revision}\``;
const routeGroups = Map.groupBy(routes, category);
const routeLines = [
  '---',
  'sidebar_position: 2',
  '---',
  '',
  '# Tam API route kataloqu',
  '',
  '> Bu səhifə `erp-backend`-in işlək Laravel route manifestindən avtomatik yaradılır. Buradakı hər sətir real route-dur; əl ilə dəyişməyin.',
  '',
  `Snapshot: ${snapshotLabel}; **${routes.length} HTTP operation** və **${uniqueRouteCount} unikal API URI**.`,
  '',
  'Bu kataloq endpointin mövcudluğu, HTTP metodu, handler-i və konteksti üçün tam indekstir. Body field-ləri və biznes təsiri üçün uyğun resurs səhifəsini, sonra backend-də controller → request/DTO → action/service → presenter zəncirini istifadə edin. Bu ayrım qeyri-dəqiq, avtomatik uydurulmuş kontraktların qarşısını alır.',
  '',
  '## Kontekst açarı',
  '',
  '| Dəyər | Mənası |',
  '| --- | --- |',
  '| `Tenant Bearer` | JWT və ya `bei_int_...` integration token tenant kontekstini açır. |',
  '| `Tenant Bearer + filial` | Bearer credential-dan sonra branch middleware işləyir: oxuda `filter.branch_id`, yazmada body `branch_id`; field olmadıqda cari istifadəçi scope-u tətbiq edilir. |',
  '| `POS cihaz tokeni` | POS sinxronizasiya protokolunun ayrıca cihaz credential-ı. |',
  '| `Açıq / route-a görə` | Health, giriş və ya middleware-i route manifestində görünməyən endpoint; uyğun controller-i yoxlayın. |',
  '',
];

for (const [name, items] of [...routeGroups.entries()].sort(([left], [right]) => left.localeCompare(right, 'az'))) {
  routeLines.push(`## ${name}`, '', '| Metod | Path | Məqsəd | Giriş konteksti | Route adı | Handler |', '| --- | --- | --- | --- | --- | --- |');
  for (const route of items) {
    routeLines.push(`| \`${route.method}\` | \`/${markdown(route.uri)}\` | ${operationName(route.method, route.action)} | ${access(route.middleware)} | \`${markdown(route.name || '—')}\` | ${compactAction(route.action)} |`);
  }
  routeLines.push('');
}

write('docs/api/reference/route-catalog.md', `${routeLines.join('\n')}\n`);

const endpointSummaries = [
  {file: 'platform', title: 'Platforma və idarəetmə', categories: ['Platform və giriş', 'Platform və sistem']},
  {file: 'master-data', title: 'Əsas məlumatlar', categories: ['Məhsul kataloqu', 'Tərəfdaşlar', 'CRM', 'İnsan resursları', 'İnventar', 'Onlayn mağaza']},
  {file: 'sales-purchase', title: 'Satış və alış', categories: ['Satış', 'Satınalma']},
  {file: 'stock', title: 'Anbar və stok', categories: ['Anbar və stok']},
  {file: 'accounting', title: 'Mühasibat və maliyyə', categories: ['Mühasibat və maliyyə']},
  {file: 'manufacturing', title: 'İstehsal', categories: ['İstehsal']},
  {file: 'pos', title: 'POS', categories: ['POS']},
  {file: 'reports-output', title: 'Hesabatlar və çıxışlar', categories: ['Hesabatlar', 'Çıxışlar']},
  {file: 'ai-integrations', title: 'Avtomatlaşdırma və inteqrasiyalar', categories: ['AI', 'İnteqrasiyalar', 'Biznes şəbəkəsi', 'Workflow', 'Toplu əməliyyatlar']},
];
const assignedCategories = new Set(endpointSummaries.flatMap((summary) => summary.categories));
const unassignedCategories = [...routeGroups.keys()].filter((name) => !assignedCategories.has(name));
if (unassignedCategories.length) {
  throw new Error(`Endpoint summary mapping is missing: ${unassignedCategories.join(', ')}`);
}

const endpointIndex = [
  '---',
  'sidebar_position: 1',
  '---',
  '',
  '# Avtomatik modul indeksləri',
  '',
  '> Bu səhifələr cari Laravel route manifestindən yaranır. Request/response kontraktı üçün uyğun resurs səhifəsini, sürətli axtarış üçün [Endpoint axtarışını](../reference/route-finder) istifadə edin.',
  '',
];

for (const [position, summary] of endpointSummaries.entries()) {
  const summaryRoutes = routes.filter((route) => summary.categories.includes(category(route)));
  const lines = [
    '---',
    `sidebar_position: ${position + 2}`,
    '---',
    '',
    `# ${summary.title}`,
    '',
    `> Cari backend snapshotından yaranıb: **${summaryRoutes.length} HTTP operation**. Bu texniki indeks path və handler üçündür; field və JSON nümunələri resursun öz səhifəsində saxlanılır.`,
    '',
  ];
  for (const name of summary.categories) {
    const items = routeGroups.get(name) ?? [];
    if (!items.length) continue;
    lines.push(`## ${name}`, '', '| Metod | Path | Məqsəd | Giriş konteksti | Handler |', '| --- | --- | --- | --- | --- |');
    for (const route of items) {
      lines.push(`| \`${route.method}\` | \`/${markdown(route.uri)}\` | ${operationName(route.method, route.action)} | ${access(route.middleware)} | ${compactAction(route.action)} |`);
    }
    lines.push('');
  }
  write(`docs/api/endpoints/${summary.file}.md`, `${lines.join('\n')}\n`);
  endpointIndex.push(`- [${summary.title}](./${summary.file}) — ${summaryRoutes.length} operation.`);
}
write('docs/api/endpoints/index.md', `${endpointIndex.join('\n')}\n`);

const coveragePath = join(root, 'docs', 'api', 'coverage.md');
const coverage = readFileSync(coveragePath, 'utf8')
  .replace(/\*\*\d+ unikal URI\*\* və \*\*\d+ HTTP operation\*\*/g, `**${uniqueRouteCount} unikal URI** və **${routes.length} HTTP operation**`)
  .replace(/bütün \d+ operation/g, `bütün ${routes.length} operation`);
write('docs/api/coverage.md', coverage);

write('src/generated/api-routes.json', `${JSON.stringify(routes.map((route) => ({
  method: route.method,
  path: `/${route.uri}`,
  module: category(route),
  purpose: operationName(route.method, route.action),
  access: access(route.middleware),
  routeName: route.name || '—',
  handler: (route.action || 'Closure').replace(/^App\\Application\\Api\\Controllers\\/, ''),
  permissionResource: route.permission?.resource ?? null,
  permissionAction: route.permission?.action ?? null,
  globalPermission: route.permission?.global_permission ?? null,
  requiresPermission: route.permission?.requires_permission ?? false,
})), null, 2)}\n`);

function phpFiles(directory) {
  const entries = readdirSync(directory, {withFileTypes: true});
  return entries.flatMap((entry) => {
    const destination = join(directory, entry.name);
    if (entry.isDirectory()) return phpFiles(destination);
    return entry.isFile() && entry.name.endsWith('.php') ? [destination] : [];
  });
}

function modelKind(name) {
  if (/(Item|Line|Component|Output|Payment|Allocation|Operation|Rule|Event|Adjustment|Application)$/.test(name)) return 'Sətir / köməkçi qeyd';
  if (/(Order|Receipt|Invoice|Return|Expense|Transfer|Entry|Document|Revaluation|Depreciation|Sale|Scrap|Consumption)$/.test(name)) return 'Biznes sənədi';
  if (/(Setting|Configuration|Template|Definition|Profile|Preference|Policy|Mapping)$/.test(name)) return 'Sazlama / qayda';
  if (/(Run|Issue|Inbox|Delivery|Log)$/.test(name)) return 'Proses / audit qeydi';
  return 'Əsas məlumat və ya domen qeydi';
}

function modelRelations(source) {
  const relations = [];
  const expression = /(?:public|protected)\s+function\s+(\w+)\s*\([^)]*\)\s*(?::\s*[^\{]+)?\{\s*return\s+\$this->(belongsTo|hasMany|hasOne|belongsToMany|morphTo|morphMany|morphOne)\s*\(\s*([^,\)]+)/g;
  for (const match of source.matchAll(expression)) {
    let target = match[3]
      .replace(/::class$/, '')
      .replace(/^['"]|['"]$/g, '')
      .split('\\').at(-1);
    if (target === '__FUNCTION__') target = '';
    relations.push(`${match[1]}: ${match[2]}${target ? ` ${target}` : ''}`);
  }
  return relations.length ? relations.join('; ') : '—';
}

const app = join(backend, 'app');
const eloquentParents = new Set([
  'Model', 'BaseModel', 'Authenticatable', 'BaseTenant', 'BaseDomain', 'SpatiePermission', 'SpatieRole',
]);
const models = phpFiles(app)
  .map((file) => {
    const source = readFileSync(file, 'utf8');
    const namespace = source.match(/namespace\s+([^;]+);/)?.[1];
    const declaration = source.match(/(?:(final|abstract)\s+)?class\s+(\w+)\s+extends\s+([\\\w]+)/);
    if (!namespace || !declaration || declaration[1] === 'abstract') return null;
    const [, , className, parent] = declaration;
    if (!eloquentParents.has(parent.split('\\').at(-1))) return null;
    const appRelative = relative(app, file).replaceAll(sep, '/');
    const domain = appRelative.match(/^Domains\/([^/]+)\//)?.[1]
      ?? (appRelative.startsWith('Core/') ? 'Core / audit'
        : appRelative.startsWith('Infrastructure/Persistence/Eloquent/') ? 'Platform / persistence'
          : appRelative.startsWith('Models/') ? 'Authorization'
            : 'Digər');
    return {
      className,
      domain,
      file: `app/${appRelative}`,
      fqcn: `${namespace}\\${className}`,
      relations: modelRelations(source),
    };
  })
  .filter(Boolean)
  .sort((left, right) => left.domain.localeCompare(right.domain, 'az') || left.className.localeCompare(right.className));

const modelGroups = Map.groupBy(models, (model) => model.domain);
const modelLines = [
  '---',
  'sidebar_position: 2',
  '---',
  '',
  '# Entity/model inventarı',
  '',
  '> Bu səhifə backend-də `Model`, `BaseModel`, `Authenticatable` və tenancy/permission model bazalarından törəyən konkret Eloquent siniflərindən avtomatik yaradılır. Modelin mövcudluğu, sahib domeni və kodda aşkar edilən relation-ları üçün tam siyahıdır; biznes mənası üçün [Entity xəritəsi](./entity-map) istifadə edin.',
  '',
  `Snapshot: ${snapshotLabel}; **${models.length} model**.`,
  '',
];

for (const [domain, items] of [...modelGroups.entries()].sort(([left], [right]) => left.localeCompare(right, 'az'))) {
  modelLines.push(`## ${domain}`, '', '| Entity | Təsnifat | Kod əlaqələri | Mənbə |', '| --- | --- | --- | --- |');
  for (const model of items) {
    modelLines.push(`| \`${model.className}\` | ${modelKind(model.className)} | ${markdown(model.relations)} | \`${model.file}\` |`);
  }
  modelLines.push('');
}

write('docs/domains/entity-inventory.md', `${modelLines.join('\n')}\n`);
console.log(`Generated ${routes.length} API operations and ${models.length} models from ${backend}.`);
