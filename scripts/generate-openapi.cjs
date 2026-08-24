#!/usr/bin/env node

/*
 * Creates the checked-in OpenAPI inventory from the neighbouring ERP backend.
 * It is intentionally a documentation aid, not a build dependency: CI builds
 * the generated file and never needs a backend checkout.
 */
const fs = require('node:fs');
const path = require('node:path');
const {execFileSync} = require('node:child_process');

const docsRoot = path.resolve(__dirname, '..');
const backendRoot = path.resolve(process.env.ERP_BACKEND_PATH || path.join(docsRoot, '..', 'erp-backend'));
const output = path.join(docsRoot, 'openapi', 'openapi.yaml');

function walk(directory) {
  return fs.readdirSync(directory, {withFileTypes: true}).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
}

function balanced(source, start) {
  let depth = 0;
  for (let i = start; i < source.length; i += 1) {
    if (source[i] === '(') depth += 1;
    if (source[i] === ')') {
      depth -= 1;
      if (depth === 0) return source.slice(start + 1, i);
    }
  }
  return '';
}

function sourceFileForClass(className) {
  if (!className.startsWith('App\\')) return null;
  return path.join(backendRoot, 'app', className.slice(4).replaceAll('\\', '/') + '.php');
}

const dataFiles = walk(path.join(backendRoot, 'app', 'Application', 'Api', 'Data'))
  .filter((file) => file.endsWith('.php'));
const dataByShortName = new Map(dataFiles.map((file) => [path.basename(file, '.php'), file]));

function schemaName(name) {
  return name.replace(/[^A-Za-z0-9_]/g, '');
}

function typeSchema(type) {
  const clean = type.replace(/\s+/g, '').replace(/Optional|\?null|null/g, '');
  if (/bool/i.test(clean)) return {type: 'boolean'};
  if (/int|float|decimal|numeric/i.test(clean)) return {type: 'number'};
  if (/array|DataCollection/i.test(clean)) return {type: 'array', items: {}};
  if (/Date|date/i.test(clean)) return {type: 'string', format: 'date-time'};
  return {type: 'string'};
}

function responseKeys(source) {
  const dataMarker = source.indexOf('$data = [');
  const returnMarker = source.indexOf('return [');
  const marker = dataMarker >= 0 ? dataMarker : returnMarker;
  if (marker < 0) return [];
  const start = source.indexOf('[', marker);
  const keys = [];
  let depth = 0;
  let quote = null;
  for (let i = start; i < source.length; i += 1) {
    const char = source[i];
    if (quote) {
      if (char === '\\') i += 1;
      else if (char === quote) quote = null;
      continue;
    }
    if (char === "'" || char === '"') {
      if (depth === 1) {
        const end = source.indexOf(char, i + 1);
        if (end > i && /^\s*=>/.test(source.slice(end + 1))) keys.push(source.slice(i + 1, end));
      }
      quote = char;
      continue;
    }
    if (char === '[') depth += 1;
    if (char === ']') {
      depth -= 1;
      if (depth === 0) break;
    }
  }
  return [...new Set(keys)];
}

function requestSchema(file) {
  const source = fs.readFileSync(file, 'utf8');
  const className = schemaName(path.basename(file, '.php'));
  const marker = source.indexOf('public function __construct(');
  if (marker < 0) return [className, {type: 'object', additionalProperties: true}];
  const fields = balanced(source, source.indexOf('(', marker));
  const properties = {};
  const required = [];
  const fieldMatcher = /(?:#\[[^\]]+\]\s*)*public\s+([^$=,\n]+?)\s+\$(\w+)(?:\s*=\s*([^,\n\)]*))?/g;
  for (const match of fields.matchAll(fieldMatcher)) {
    const [, type, name, defaultValue = ''] = match;
    if (className.endsWith('ResponseData')) continue;
    if (name === 'saleOrder' || name === 'purchaseOrder' || name === 'purchaseReceipt' || name === 'stockDocument') continue;
    const property = typeSchema(type);
    const collection = match[0].match(/DataCollectionOf\((\w+)::class/);
    if (collection && dataByShortName.has(collection[1])) {
      property.type = 'array';
      property.items = {$ref: `#/components/schemas/${schemaName(collection[1])}`};
    }
    properties[name] = property;
    if (!/Optional|new Optional/.test(type + defaultValue)) required.push(name);
  }
  const rules = source.match(/public static function rules[\s\S]*?return\s*\[([\s\S]*?)\n\s*\];/);
  if (rules) {
    for (const [name, property] of Object.entries(properties)) {
      const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const rule = new RegExp(`['\"]${escaped}['\"]\\s*=>\\s*\\[([\\s\\S]*?)\\]`, 'm').exec(rules[1]);
      if (rule?.[1].includes("'required'")) {
        if (!required.includes(name)) required.push(name);
      }
      const enumMatch = rule?.[1].match(/['\"]in:([^'\"]+)['\"]/);
      if (enumMatch) property.enum = enumMatch[1].split(',');
    }
  }
  if (className.endsWith('ResponseData') && Object.keys(properties).length === 0) {
    for (const key of responseKeys(source)) properties[key] = {};
  }
  if (className.endsWith('ResponseData')) {
    for (const match of source.matchAll(/\$data\['(\w+)'\]\s*=/g)) {
      properties[match[1]] ||= {};
    }
    for (const [key, property] of Object.entries(properties)) {
      const assignment = new RegExp(`\\$data\\['${key}'\\][\\s\\S]{0,900}?(\\w+ResponseData)::fromModel`).exec(source);
      if (assignment && dataByShortName.has(assignment[1])) {
        property.type = 'array';
        property.items = {$ref: `#/components/schemas/${schemaName(assignment[1])}`};
      }
    }
  }
  return [className, {type: 'object', properties, ...(required.length ? {required} : {}), additionalProperties: false}];
}

const components = {};
for (const file of dataFiles) {
  const [name, schema] = requestSchema(file);
  components[name] = schema;
}

function controllerRequestData(action) {
  const [controller, method] = action.split('@');
  const file = sourceFileForClass(controller);
  if (!file || !fs.existsSync(file)) return null;
  const source = fs.readFileSync(file, 'utf8');
  const marker = source.indexOf(`function ${method}(`);
  if (marker < 0) return null;
  const signature = balanced(source, source.indexOf('(', marker));
  const found = signature.match(/(?:^|,|\n)\s*(?:\\?[\\\w]+\\)?(\w+RequestData)\s+\$\w+/);
  return found?.[1] && dataByShortName.has(found[1]) ? schemaName(found[1]) : null;
}

function controllerSource(action) {
  const [controller] = action.split('@');
  const file = sourceFileForClass(controller);
  return file && fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
}

function controllerResponseData(action) {
  const source = controllerSource(action);
  const direct = [...source.matchAll(/use\s+[^;]+\\(\w+ResponseData);/g)].map((match) => match[1]);
  if (direct.find((name) => dataByShortName.has(name))) return schemaName(direct.find((name) => dataByShortName.has(name)));
  const presenters = [...source.matchAll(/use\s+([^;]+\\\w+Presenter);/g)].map((match) => match[1]);
  for (const presenter of presenters) {
    const file = sourceFileForClass(presenter);
    if (!file || !fs.existsSync(file)) continue;
    const presenterSource = fs.readFileSync(file, 'utf8');
    const response = [...presenterSource.matchAll(/use\s+[^;]+\\(\w+ResponseData);/g)].map((match) => match[1]).find((name) => dataByShortName.has(name));
    if (response) return schemaName(response);
  }
  return null;
}

function methodBody(action) {
  const [, method] = action.split('@');
  const source = controllerSource(action);
  const marker = source.indexOf(`function ${method}(`);
  if (marker < 0) return '';
  const brace = source.indexOf('{', marker);
  let depth = 0;
  for (let i = brace; i < source.length; i += 1) {
    if (source[i] === '{') depth += 1;
    if (source[i] === '}') {
      depth -= 1;
      if (depth === 0) return source.slice(brace + 1, i);
    }
  }
  return '';
}

function titleFromRoute(route) {
  const [, action = 'operation'] = route.action.split('@');
  const label = (route.name || route.uri).split('.').at(0).replaceAll('-', ' ');
  const verbs = {
    index: 'Siyahı', show: 'Detalı göstər', store: 'Yarat', update: 'Yenilə', destroy: 'Sil',
    changeState: 'Vəziyyəti dəyiş', post: 'Post et', cancel: 'Ləğv et', draft: 'Qaralamaya qaytar',
    activate: 'Aktivləşdir', archive: 'Arxivlə', preview: 'Önizlə', publish: 'Yayımla',
    clone: 'Klonla', sync: 'Sinxronlaşdır', push: 'Göndər', pull: 'Qəbul et',
  };
  return `${label.replace(/\b\w/g, (letter) => letter.toUpperCase())}: ${verbs[action] || action}`;
}

const domainDescriptions = {
  accounting: 'Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı.',
  sale: 'Satış sənədi və satış prosesinin əməliyyatı.',
  purchase: 'Alış sənədi və tədarük prosesinin əməliyyatı.',
  stock: 'Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı.',
  pos: 'POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı.',
  product: 'Məhsul kataloqu və məhsul parametrləri əməliyyatı.',
  partner: 'Tərəfdaş əsas məlumatı əməliyyatı.',
  manufacturing: 'İstehsal planlama və icra əməliyyatı.',
  report: 'Hesabat məlumatının oxunması və ya qurulması əməliyyatı.',
};

function description(route) {
  const uri = route.uri.replace(/^api\/v1\/?/, '');
  const first = uri.split('/')[0];
  const group = first.startsWith('sale-') ? domainDescriptions.sale
    : first.startsWith('purchase-') || first === 'invoices-in' || first === 'refunds-in' ? domainDescriptions.purchase
      : first.startsWith('stock-') || first === 'stocks' ? domainDescriptions.stock
        : first.startsWith('pos-') || first === 'pos' ? domainDescriptions.pos
          : first.startsWith('product-') || ['products', 'categories', 'units'].includes(first) ? domainDescriptions.product
            : first.startsWith('partner') ? domainDescriptions.partner
              : first === 'manufacturing' || first === 'boms' || first === 'routings' || first === 'orders' ? domainDescriptions.manufacturing
                : first.includes('report') || first === 'reports' ? domainDescriptions.report
                  : domainDescriptions.accounting && ['accounts', 'currencies', 'payments', 'wallets', 'expenses', 'debts', 'finance', 'taxes', 'tax-profile'].includes(first) ? domainDescriptions.accounting
                    : 'ERP resursu və ya sistem konfiqurasiyası əməliyyatı.';
  return `${group} `
    + `Backend route adı: \`${route.name || 'adsız'}\`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.`;
}

function securityFor(route) {
  const middleware = route.middleware.join(' ');
  if (middleware.includes('IntegrationServiceAccountMiddleware')) return [{serviceAccount: []}];
  if (middleware.includes('PosDeviceAuthenticateMiddleware')) return [{posDevice: []}];
  if (middleware.includes('TenantAuthenticateMiddleware')) return [{bearerAuth: []}];
  return [];
}

function parametersFor(route, routePath) {
  const params = [];
  for (const name of routePath.matchAll(/\{([^}]+)}/g)) {
    params.push({name: name[1], in: 'path', required: true, description: 'Resursun UUID identifikatoru.', schema: {type: 'string', format: 'uuid'}});
  }
  const middleware = route.middleware.join(' ');
  if (middleware.includes('EnforceBranchContextMiddleware') || middleware.includes('IntegrationServiceAccountMiddleware')) {
    params.push({name: 'X-Branch-Id', in: 'header', required: middleware.includes('IntegrationServiceAccountMiddleware'), description: 'Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir.', schema: {type: 'string'}});
  }
  if (middleware.includes('IntegrationServiceAccountMiddleware')) {
    params.push({name: 'X-Tenant-Account', in: 'header', required: true, description: 'Service account üçün tenant hesabı.', schema: {type: 'string'}});
  }
  const [, action] = route.action.split('@');
  const body = methodBody(route.action);
  if (action === 'index' && body.includes("query('q')")) {
    params.push({name: 'q', in: 'query', required: false, description: 'Mətn üzrə axtarış.', schema: {type: 'string'}});
  }
  if (action === 'index' && body.includes('Pagination::perPage')) {
    params.push({name: 'page', in: 'query', required: false, description: 'Səhifə nömrəsi.', schema: {type: 'integer', minimum: 1}});
    params.push({name: 'per_page', in: 'query', required: false, description: 'Səhifədə element sayı.', schema: {type: 'integer', minimum: 1}});
  }
  return params;
}

function responsesFor(route, method, authenticated) {
  const [, action] = route.action.split('@');
  const body = methodBody(route.action);
  const success = action === 'store' && /ApiResponse::success[\s\S]{0,500},\s*201\s*\)/.test(body) ? '201' : '200';
  const responseData = controllerResponseData(route.action);
  const list = action === 'index';
  const data = responseData ? (list ? {type: 'array', items: {$ref: `#/components/schemas/${responseData}`}} : {$ref: `#/components/schemas/${responseData}`}) : {};
  const schema = {
    type: 'object', required: ['status', 'data'],
    properties: {
      status: {type: 'string', const: 'success'},
      message: {type: ['string', 'null']},
      data,
      ...(list ? {links: {type: 'object'}, meta: {type: 'object'}} : {}),
    },
  };
  const responses = {
    [success]: {description: 'Uğurlu cavab.', content: {'application/json': {schema}}},
  };
  if (authenticated) responses['401'] = {$ref: '#/components/responses/Unauthorized'};
  responses['403'] = {$ref: '#/components/responses/Forbidden'};
  responses['422'] = {$ref: '#/components/responses/ValidationError'};
  return responses;
}

const inventoryPath = process.env.ERP_ROUTE_INVENTORY;
const routeInventory = inventoryPath
  ? fs.readFileSync(path.resolve(inventoryPath), 'utf8')
  : execFileSync('php', ['artisan', 'route:list', '--json'], {cwd: backendRoot, encoding: 'utf8'});
const routes = JSON.parse(routeInventory);
const paths = {};
const canonicalPathParameters = new Map();
function canonicalPath(uri) {
  const routePath = uri.replace(/^api\/?/, '');
  const shape = routePath.replace(/\{[^}]+}/g, '{}');
  if (!canonicalPathParameters.has(shape)) {
    canonicalPathParameters.set(shape, [...routePath.matchAll(/\{([^}]+)}/g)].map((match) => match[1]));
  }
  const names = canonicalPathParameters.get(shape);
  let index = 0;
  return `/${routePath.replace(/\{[^}]+}/g, () => `{${names[index++]}}`)}`;
}
for (const route of routes.filter((route) => route.uri.startsWith('api/v1/') || route.uri.startsWith('api/health'))) {
  // OpenAPI treats parameter names as equivalent in a path template. Keep the
  // first route's meaningful names when Laravel methods share that shape.
  const routePath = canonicalPath(route.uri);
  paths[routePath] ||= {};
  const methods = route.method.split('|').map((method) => method.toLowerCase()).filter((method) => method !== 'head');
  for (const method of methods) {
    const operation = {
      tags: [routePath.split('/')[2] || 'Platform'],
      operationId: `${(route.name || `${method}_${routePath}`).replace(/[^A-Za-z0-9_.-]/g, '_')}_${method}`,
      summary: titleFromRoute(route),
      description: description(route),
      security: securityFor(route),
      parameters: parametersFor(route, routePath),
      responses: responsesFor(route, method, securityFor(route).length > 0),
    };
    const [, action] = route.action.split('@');
    const request = controllerRequestData(route.action) || (action === 'changeState' ? 'StateTransitionRequest' : null);
    if (['post', 'put', 'patch'].includes(method)) {
      operation.requestBody = {
        required: request !== null,
        content: {'application/json': {schema: request ? {$ref: `#/components/schemas/${request}`} : {$ref: '#/components/schemas/GenericRequest'}}},
      };
    }
    paths[routePath][method] = operation;
  }
}

const specification = {
  openapi: '3.1.0',
  info: {
    title: 'BEIN ERP API', version: '1.0.0',
    description: 'ERP backend-in mənbə kodundan inventarlaşdırılmış API referansı. Bütün qorunan endpointlərdə operation-level security tələbi göstərilir.',
    license: {name: 'Proprietary', url: 'https://beinsystems.az'},
  },
  servers: [{url: 'https://{apiHost}/api', variables: {apiHost: {default: 'api.beinsystems.az', description: 'İnteqratora təqdim edilən API hostu.'}}}],
  tags: [
    {name: 'Platform', description: 'Health, tenant və ümumi sistem əməliyyatları.'},
    {name: 'ai', description: 'AI söhbət və action proposal əməliyyatları.'},
    {name: 'integrations', description: 'Service account ilə inteqrasiya əməliyyatları.'},
    {name: 'pos', description: 'POS cihaz və sinxronizasiya əməliyyatları.'},
  ],
  paths,
  components: {
    securitySchemes: {
      bearerAuth: {type: 'http', scheme: 'bearer', bearerFormat: 'JWT'},
      serviceAccount: {type: 'http', scheme: 'bearer', bearerFormat: 'Service token'},
      posDevice: {type: 'http', scheme: 'device', description: 'Authorization: Device <tenant-uuid>.<device-secret>'},
    },
    schemas: {
      SuccessEnvelope: {type: 'object', required: ['status', 'data'], properties: {status: {type: 'string', const: 'success'}, message: {type: ['string', 'null']}, data: {}}},
      ErrorEnvelope: {type: 'object', required: ['status', 'message'], properties: {status: {type: 'string', const: 'error'}, message: {type: 'string'}, errors: {type: 'object', additionalProperties: {type: 'array', items: {type: 'string'}}}}},
      GenericRequest: {type: 'object', description: 'Bu controller xam Request qəbul edir. Dəqiq sahələr endpoint təsvirində və backend validation qaydasında müəyyən olunur.', additionalProperties: true},
      StateTransitionRequest: {type: 'object', required: ['state'], properties: {state: {type: 'string', description: 'Sənədin hədəf vəziyyəti. İcazəli dəyərlər həmin sənədin state maşını ilə yoxlanır.'}}, additionalProperties: false},
      ...components,
    },
    responses: {
      Unauthorized: {description: 'Credential yoxdur, etibarsızdır və ya tenant istifadəçisi müəyyən edilmir.', content: {'application/json': {schema: {$ref: '#/components/schemas/ErrorEnvelope'}}}},
      Forbidden: {description: 'İstifadəçi, service account və ya filialın bu əməliyyata icazəsi yoxdur.', content: {'application/json': {schema: {$ref: '#/components/schemas/ErrorEnvelope'}}}},
      ValidationError: {description: 'Sorğu formatı və ya biznes qaydası pozulub.', content: {'application/json': {schema: {$ref: '#/components/schemas/ErrorEnvelope'}}}},
    },
  },
};

// Keep the generated contract readable and warning-free: retain only request
// and response schemas reached by an operation, including nested collection
// schemas referenced by those schemas.
const usedSchemas = new Set(['ErrorEnvelope', 'GenericRequest', 'StateTransitionRequest']);
const collectRefs = (value) => {
  if (!value || typeof value !== 'object') return;
  if (typeof value.$ref === 'string' && value.$ref.startsWith('#/components/schemas/')) usedSchemas.add(value.$ref.split('/').at(-1));
  for (const nested of Object.values(value)) collectRefs(nested);
};
collectRefs(specification.paths);
let previousSize = -1;
while (previousSize !== usedSchemas.size) {
  previousSize = usedSchemas.size;
  for (const name of [...usedSchemas]) collectRefs(components[name]);
}
specification.components.schemas = Object.fromEntries(Object.entries(specification.components.schemas).filter(([name]) => usedSchemas.has(name)));

fs.writeFileSync(output, `${JSON.stringify(specification, null, 2)}\n`);
console.log(`Wrote ${Object.keys(paths).length} API paths to ${path.relative(docsRoot, output)}.`);
