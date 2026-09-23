/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const fs = require('fs');
const path = require('path');

const resourceItems = (module) => {
  const resourceDir = path.join(__dirname, 'docs', 'modules', module, 'resources');

  if (!fs.existsSync(resourceDir)) {
    return [];
  }

  return fs.readdirSync(resourceDir)
    .filter((file) => file.endsWith('.md'))
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
  ],
};
