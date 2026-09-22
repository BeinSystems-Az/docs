/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const fs = require('fs');
const path = require('path');
const {isInternalResourceDocId} = require('./scripts/api-doc-scope.cjs');

const resourceItems = (module) => {
  const resourceDir = path.join(__dirname, 'docs', 'modules', module, 'resources');

  if (!fs.existsSync(resourceDir)) {
    return [];
  }

  return fs.readdirSync(resourceDir)
    .filter((file) => file.endsWith('.md'))
    .filter((file) => !isInternalResourceDocId(`modules/${module}/resources/${file.replace(/\.md$/, '')}`))
    .sort()
    .map((file) => {
      const source = fs.readFileSync(path.join(resourceDir, file), 'utf8');
      const title = source.match(/^title:\s*(.+)$/m)?.[1]?.trim()
        || source.match(/^#\s+(.+)$/m)?.[1]?.trim()
        || file.replace(/\.md$/, '');

      return {
        type: 'doc',
        id: `modules/${module}/resources/${file.replace(/\.md$/, '')}`,
        label: title,
      };
    });
};

const moduleCategory = (label, module, extraItems = []) => ({
  type: 'category',
  label,
  link: {type: 'doc', id: `modules/${module}/index`},
  collapsed: true,
  items: [...extraItems, ...resourceItems(module)],
});

module.exports = {
  documentation: [
    {
      type: 'category',
      label: 'Başlanğıc',
      link: {type: 'doc', id: 'intro'},
      collapsed: false,
      items: [
        {type: 'doc', id: 'api/authentication', label: 'Giriş və autentifikasiya'},
        {type: 'doc', id: 'api/contract', label: 'API kontraktı'},
      ],
    },
    {
      type: 'category',
      label: 'Sistem necə işləyir',
      link: {type: 'doc', id: 'architecture/overview'},
      collapsed: true,
      items: [
        {type: 'doc', id: 'architecture/tenancy', label: 'Tenant və filial modeli'},
        {type: 'doc', id: 'architecture/request-lifecycle', label: 'Sorğunun həyat dövrü'},
        {type: 'doc', id: 'architecture/resources', label: 'Resursların quruluşu'},
        {type: 'doc', id: 'architecture/business-documents', label: 'Biznes sənədləri və təsirlər'},
      ],
    },
    {
      type: 'category',
      label: 'Biznes modulları',
      link: {type: 'doc', id: 'modules/index'},
      collapsed: false,
      items: [
        moduleCategory('Məhsul və kataloq', 'catalog', [
          {type: 'doc', id: 'api/modules/products/catalog-products', label: 'Məhsullar'},
          {type: 'doc', id: 'api/modules/products/product-templates', label: 'Məhsul şablonları'},
          {type: 'doc', id: 'api/modules/products/categories', label: 'Kateqoriyalar'},
          {type: 'doc', id: 'api/modules/products/units', label: 'Ölçü vahidləri'},
          {type: 'doc', id: 'api/modules/products/product-packagings', label: 'Qablaşdırmalar'},
          {type: 'doc', id: 'api/modules/products/product-attributes', label: 'Məhsul atributları'},
        ]),
        moduleCategory('Satış', 'sales', [
          {type: 'doc', id: 'api/modules/sales/sale-orders', label: 'Satış sifarişləri'},
          {type: 'doc', id: 'api/modules/sales/sale-receipts', label: 'Satış qəbzləri'},
        ]),
        moduleCategory('Satınalma', 'purchase', [
          {type: 'doc', id: 'api/modules/purchase/purchase-orders', label: 'Alış sifarişləri'},
          {type: 'doc', id: 'api/modules/purchase/purchase-receipts', label: 'Alış qəbzləri'},
        ]),
        moduleCategory('CRM', 'crm'),
        moduleCategory('Tərəfdaşlar', 'partners'),
        moduleCategory('Onlayn mağaza', 'store'),
        moduleCategory('Anbar və stok', 'stock'),
        moduleCategory('İstehsal', 'manufacturing'),
        moduleCategory('POS', 'pos'),
        moduleCategory('Mühasibatlıq və maliyyə', 'accounting'),
        moduleCategory('Hesabatlar', 'reports'),
        moduleCategory('Çıxış və çap', 'output'),
        moduleCategory('İnsan resursları', 'hr'),
        moduleCategory('Biznes şəbəkəsi', 'network'),
        moduleCategory('Workflow və avtomatlaşdırma', 'automation'),
        moduleCategory('İnteqrasiyalar', 'integrations'),
        moduleCategory('İstifadəçi və giriş', 'access'),
        moduleCategory('Platforma və sistem', 'platform'),
      ],
    },
    {
      type: 'category', label: 'Məlumat modeli və AI', link: {type: 'doc', id: 'domains/entity-map'}, collapsed: true,
      items: [
        {type: 'doc', id: 'domains/entity-inventory', label: 'Bütün entity və modellər'},
        {type: 'doc', id: 'ai/system-map', label: 'AI üçün sistem xəritəsi'},
      ],
    },
    {
      type: 'category', label: 'Texniki indekslər', collapsed: true, items: [
        {type: 'doc', id: 'api/reference/route-finder', label: 'Backend endpoint axtarışı'},
        {type: 'doc', id: 'api/coverage', label: 'Sənəd əhatəsi'},
        {type: 'doc', id: 'api/reference/route-catalog', label: 'Route kataloqu'},
        {
          type: 'category', label: 'Endpoint indeksləri', link: {type: 'doc', id: 'api/endpoints/index'}, collapsed: true,
          items: [
            {type: 'doc', id: 'api/endpoints/platform', label: 'Platforma və idarəetmə'},
            {type: 'doc', id: 'api/endpoints/master-data', label: 'Əsas məlumatlar'},
            {type: 'doc', id: 'api/endpoints/sales-purchase', label: 'Satış və alış'},
            {type: 'doc', id: 'api/endpoints/stock', label: 'Anbar və stok'},
            {type: 'doc', id: 'api/endpoints/accounting', label: 'Mühasibat və maliyyə'},
            {type: 'doc', id: 'api/endpoints/manufacturing', label: 'İstehsal'},
            {type: 'doc', id: 'api/endpoints/pos', label: 'POS'},
            {type: 'doc', id: 'api/endpoints/reports-output', label: 'Hesabatlar və çıxışlar'},
            {type: 'doc', id: 'api/endpoints/ai-integrations', label: 'Avtomatlaşdırma və inteqrasiyalar'},
          ],
        },
      ],
    },
    {type: 'doc', id: 'contributing', label: 'Sənədlərə töhfə'},
  ],
};
