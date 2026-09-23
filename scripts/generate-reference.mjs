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
import {mkdirSync, readFileSync, rmSync, writeFileSync} from 'node:fs';
import {dirname, join, resolve} from 'node:path';
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

console.log(`Generated ${routes.length} API operations from ${backend}.`);
