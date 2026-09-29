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
      label: 'API',
      link: {type: 'doc', id: 'api/index'},
      collapsed: false,
      items: [
        {type: 'doc', id: 'intro', label: 'API versiyası'},
        {type: 'doc', id: 'api/authentication', label: 'Giriş və autentifikasiya'},
        {type: 'doc', id: 'api/contract', label: 'API kontraktı'},
        {
          type: 'category',
          label: 'API resursları',
          link: {type: 'doc', id: 'modules/index'},
          collapsed: true,
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
    },
    {
      type: 'category',
      label: 'İstifadəçi təlimatı',
      link: {type: 'doc', id: 'user-guide/index'},
      collapsed: false,
      items: [
        {type: 'category', label: 'Şirkətim', collapsed: true, items: [
          {type: 'doc', id: 'user-guide/modules/operations/dashboard', label: 'Göstəricilər'},
          {type: 'doc', id: 'user-guide/modules/operations/ai-assistant', label: 'AI köməkçi'},
          {type: 'doc', id: 'user-guide/modules/operations/projects', label: 'Layihələr'},
          {type: 'doc', id: 'user-guide/modules/operations/audit', label: 'Audit'},
          {type: 'doc', id: 'user-guide/modules/automation/integrations', label: 'İnteqrasiyalar'},
          {type: 'doc', id: 'user-guide/modules/automation/business-network', label: 'Şirkətlərarası şəbəkə'},
          {type: 'doc', id: 'user-guide/modules/automation/workflows', label: 'Avtomatlaşdırma'},
          {type: 'doc', id: 'user-guide/modules/automation/approvals', label: 'Mənim təsdiqlərim'},
          {type: 'doc', id: 'user-guide/modules/operations/trash', label: 'Səbət'},
        ]},
        {type: 'category', label: 'Məhsul', collapsed: true, items: [
          {type: 'doc', id: 'user-guide/modules/catalog/products', label: 'Məhsul və Xidmətlər'},
          {type: 'doc', id: 'user-guide/modules/catalog/categories', label: 'Kateqoriyalar'},
          {type: 'doc', id: 'user-guide/modules/catalog/product-bundles', label: 'Dəstlər'},
          {type: 'doc', id: 'user-guide/modules/catalog/traceability', label: 'Partiyalar və seriyalar'},
        ]},
        {type: 'category', label: 'Tərəf-müqabillər', collapsed: true, items: [
          {type: 'doc', id: 'user-guide/modules/partners/counterparties', label: 'Bütün tərəf-müqabillər'},
        ]},
        {type: 'category', label: 'CRM', collapsed: true, items: [
          {type: 'doc', id: 'user-guide/modules/crm/overview', label: 'Ümumi baxış'},
          {type: 'doc', id: 'user-guide/modules/crm/leads', label: 'Lidlər'},
          {type: 'doc', id: 'user-guide/modules/crm/tasks', label: 'Tapşırıqlar'},
        ]},
        {type: 'category', label: 'Təchizat', collapsed: true, items: [
          {type: 'doc', id: 'user-guide/modules/purchase/purchase-receipts', label: 'Alışlar'},
          {type: 'doc', id: 'user-guide/modules/purchase/purchase-invoices', label: 'Fakturalar'},
          {type: 'doc', id: 'user-guide/modules/purchase/purchase-orders', label: 'Sifarişlər'},
          {type: 'doc', id: 'user-guide/modules/purchase/purchase-returns', label: 'Qaytarmalar'},
          {type: 'doc', id: 'user-guide/modules/partners/suppliers', label: 'Təchizatçılar'},
        ]},
        {type: 'category', label: 'Satış', collapsed: true, items: [
          {type: 'doc', id: 'user-guide/modules/sales/sale-receipts', label: 'Satışlar'},
          {type: 'doc', id: 'user-guide/modules/sales/sale-invoices', label: 'Fakturalar'},
          {type: 'doc', id: 'user-guide/modules/sales/sales-orders', label: 'Sifarişlər'},
          {type: 'doc', id: 'user-guide/modules/sales/sale-returns', label: 'Qaytarmalar'},
          {type: 'doc', id: 'user-guide/modules/partners/customers', label: 'Müştərilər'},
        ]},
        {type: 'category', label: 'Pərakəndə', collapsed: true, items: [
          {type: 'doc', id: 'user-guide/modules/retail/shifts', label: 'Növbələr'},
          {type: 'doc', id: 'user-guide/modules/retail/pos-sales', label: 'Satışlar'},
          {type: 'doc', id: 'user-guide/modules/retail/pos-returns', label: 'Qaytarmalar'},
          {type: 'doc', id: 'user-guide/modules/retail/deposits', label: 'Mədaxil'},
          {type: 'doc', id: 'user-guide/modules/retail/withdrawals', label: 'Məxaric'},
          {type: 'doc', id: 'user-guide/modules/retail/sync', label: 'Sync'},
          {type: 'doc', id: 'user-guide/modules/retail/reasons', label: 'Kassa səbəbləri'},
        ]},
        {type: 'category', label: 'Anbar', collapsed: true, items: [
          {type: 'doc', id: 'user-guide/modules/stock/receipts', label: 'Daxilolmalar'},
          {type: 'doc', id: 'user-guide/modules/stock/deliveries', label: 'Çıxışlar'},
          {type: 'doc', id: 'user-guide/modules/stock/transfers', label: 'Yerdəyişmələr'},
          {type: 'doc', id: 'user-guide/modules/stock/scrap', label: 'Silinmələr'},
          {type: 'doc', id: 'user-guide/modules/stock/inventory', label: 'İnventarizasiyalar'},
          {type: 'category', label: 'Anbar Hesabatları', collapsed: true, items: [
            {type: 'doc', id: 'user-guide/modules/stock/on-hand', label: 'Anbar qalığı'},
            {type: 'doc', id: 'user-guide/modules/stock/storage-duration', label: 'Stokun saxlanma müddəti'},
            {type: 'doc', id: 'user-guide/modules/stock/turnover', label: 'Anbar Dövriyyəsi'},
            {type: 'doc', id: 'user-guide/modules/stock/low-stock', label: 'Minimum Qalıq'},
            {type: 'doc', id: 'user-guide/modules/stock/reservations', label: 'Rezervlər'},
          ]},
          {type: 'category', label: 'Konfiqurasiya', collapsed: true, items: [
            {type: 'doc', id: 'user-guide/modules/stock/warehouses', label: 'Anbarlar'},
            {type: 'doc', id: 'user-guide/modules/stock/locations', label: 'Lokasiyalar'},
          ]},
        ]},
        {type: 'category', label: 'Hesabatlar', collapsed: true, items: [
          {type: 'doc', id: 'user-guide/modules/reports/warehouse', label: 'Anbar'},
          {type: 'doc', id: 'user-guide/modules/reports/sales', label: 'Satış'},
          {type: 'doc', id: 'user-guide/modules/reports/procurement', label: 'Satınalma'},
          {type: 'doc', id: 'user-guide/modules/reports/debts', label: 'Borclar'},
          {type: 'doc', id: 'user-guide/modules/reports/finance', label: 'Maliyyə'},
          {type: 'doc', id: 'user-guide/modules/reports/executive', label: 'Rəhbərlik'},
        ]},
        {type: 'category', label: 'Maliyyə', collapsed: true, items: [
          {type: 'doc', id: 'user-guide/modules/finance/expenses', label: 'Xərclər'},
          {type: 'doc', id: 'user-guide/modules/finance/payments', label: 'Ödənişlər'},
          {type: 'doc', id: 'user-guide/modules/finance/transfers', label: 'Transferlər'},
          {type: 'doc', id: 'user-guide/modules/finance/debts', label: 'Borclar'},
          {type: 'doc', id: 'user-guide/modules/finance/accounts', label: 'Hesablar'},
        ]},
        {type: 'category', label: 'HR', collapsed: true, items: [
          {type: 'doc', id: 'user-guide/modules/hr/employees', label: 'Əməkdaşlar'},
          {type: 'doc', id: 'user-guide/modules/hr/attendance', label: 'Davamiyyət'},
          {type: 'doc', id: 'user-guide/modules/hr/jobs', label: 'Vəzifələr'},
          {type: 'doc', id: 'user-guide/modules/hr/departments', label: 'Şöbələr'},
          {type: 'doc', id: 'user-guide/modules/hr/payroll', label: 'Maaşlar və ödənişlər'},
        ]},
        {type: 'category', label: 'Mühasibatlıq', collapsed: true, items: [
          {type: 'doc', id: 'user-guide/modules/accounting/entries', label: 'Əməliyyat jurnalı'},
          {type: 'category', label: 'Hesabatlar', collapsed: true, items: [
            {type: 'doc', id: 'user-guide/modules/accounting/trial-balance', label: 'Dövriyyə-saldo cədvəli'},
            {type: 'doc', id: 'user-guide/modules/accounting/account-card', label: 'Hesab kartı'},
            {type: 'doc', id: 'user-guide/modules/accounting/balance-sheet', label: 'Balans hesabatı'},
            {type: 'doc', id: 'user-guide/modules/accounting/profit-loss', label: 'Mənfəət və ya Zərər'},
          ]},
          {type: 'category', label: 'Əsas vəsaitlər', collapsed: true, items: [
            {type: 'doc', id: 'user-guide/modules/accounting/fixed-assets', label: 'Əsas vəsait kartları'},
            {type: 'doc', id: 'user-guide/modules/accounting/depreciation', label: 'İllik amortizasiya'},
            {type: 'doc', id: 'user-guide/modules/accounting/asset-transfers', label: 'Transferlər'},
            {type: 'doc', id: 'user-guide/modules/accounting/asset-sales', label: 'Satışlar'},
            {type: 'doc', id: 'user-guide/modules/accounting/asset-scraps', label: 'Silinmələr'},
          ]},
          {type: 'category', label: 'Konfiqurasiya', collapsed: true, items: [
            {type: 'doc', id: 'user-guide/modules/accounting/accounts', label: 'Hesablar'},
          ]},
        ]},
        {type: 'category', label: 'Restoran', collapsed: true, items: [
          {type: 'doc', id: 'user-guide/modules/restaurant/tables', label: 'Masalar'},
        ]},
        {type: 'category', label: 'İstehsalat', collapsed: true, items: [
          {type: 'doc', id: 'user-guide/modules/manufacturing/productions', label: 'İstehsal'},
          {type: 'doc', id: 'user-guide/modules/manufacturing/orders', label: 'İstehsal sifarişləri'},
          {type: 'doc', id: 'user-guide/modules/manufacturing/reports', label: 'İstehsalat hesabatları'},
          {type: 'doc', id: 'user-guide/modules/manufacturing/progress', label: 'İstehsalın gedişi'},
          {type: 'doc', id: 'user-guide/modules/manufacturing/quality-inspections', label: 'Keyfiyyət yoxlamaları'},
          {type: 'category', label: 'Məlumat kitabçası', collapsed: true, items: [
            {type: 'doc', id: 'user-guide/modules/manufacturing/boms', label: 'BOM və formulalar'},
            {type: 'doc', id: 'user-guide/modules/manufacturing/routings', label: 'Marşrutlar'},
            {type: 'doc', id: 'user-guide/modules/manufacturing/work-centers', label: 'İş mərkəzləri'},
            {type: 'doc', id: 'user-guide/modules/manufacturing/quality-plans', label: 'Keyfiyyət planları'},
          ]},
        ]},
        {type: 'category', label: 'Ayarlar', collapsed: true, items: [
          {type: 'category', label: 'Sistem', collapsed: true, items: [
            {type: 'doc', id: 'user-guide/modules/platform/settings/system-general', label: 'Ümumi ayarlar'},
            {type: 'doc', id: 'user-guide/modules/platform/settings/appearance', label: 'Görünüş'},
            {type: 'doc', id: 'user-guide/modules/platform/settings/menu', label: 'Menyu'},
            {type: 'doc', id: 'user-guide/modules/platform/settings/modules', label: 'Modullar'},
            {type: 'doc', id: 'user-guide/modules/platform/settings/output-templates', label: 'Çap şablonları'},
            {type: 'doc', id: 'user-guide/modules/platform/reset-operational-data', label: 'Əməliyyat məlumatlarını sıfırla'},
          ]},
          {type: 'category', label: 'Göstəricilər', collapsed: true, items: [
            {type: 'doc', id: 'user-guide/modules/platform/settings/dashboard-general', label: 'Ayarlar'},
          ]},
          {type: 'category', label: 'Online mağaza', collapsed: true, items: [
            {type: 'doc', id: 'user-guide/modules/store/setup', label: 'Mağaza ayarları'},
          ]},
          {type: 'category', label: 'Məhsul', collapsed: true, items: [
            {type: 'doc', id: 'user-guide/modules/platform/settings/product-general', label: 'Ayarlar'},
            {type: 'doc', id: 'user-guide/modules/catalog/units-packaging', label: 'Ölçü vahidləri'},
          ]},
          {type: 'category', label: 'CRM', collapsed: true, items: [
            {type: 'doc', id: 'user-guide/modules/platform/settings/crm-general', label: 'Ayarlar'},
          ]},
          {type: 'category', label: 'Təchizat', collapsed: true, items: [
            {type: 'doc', id: 'user-guide/modules/platform/settings/purchase-general', label: 'Ayarlar'},
          ]},
          {type: 'category', label: 'Satış', collapsed: true, items: [
            {type: 'doc', id: 'user-guide/modules/platform/settings/sales-general', label: 'Ayarlar'},
          ]},
          {type: 'category', label: 'Pərakəndə', collapsed: true, items: [
            {type: 'doc', id: 'user-guide/modules/platform/settings/retail', label: 'Ayarlar'},
            {type: 'doc', id: 'user-guide/modules/platform/settings/pos-registers', label: 'Kassalar'},
            {type: 'doc', id: 'user-guide/modules/platform/settings/pos-payment-types', label: 'Ödəniş növləri'},
          ]},
          {type: 'category', label: 'Anbar', collapsed: true, items: [
            {type: 'doc', id: 'user-guide/modules/stock/settings', label: 'Ayarlar'},
          ]},
          {type: 'category', label: 'Maliyyə', collapsed: true, items: [
            {type: 'doc', id: 'user-guide/modules/platform/settings/finance-general', label: 'Ayarlar'},
            {type: 'doc', id: 'user-guide/modules/platform/settings/currencies', label: 'Valyutalar'},
            {type: 'doc', id: 'user-guide/modules/platform/settings/expense-categories', label: 'Xərc maddələri'},
          ]},
          {type: 'category', label: 'HR', collapsed: true, items: [
            {type: 'doc', id: 'user-guide/modules/platform/settings/hr-general', label: 'Ayarlar'},
          ]},
          {type: 'category', label: 'Mühasibatlıq', collapsed: true, items: [
            {type: 'doc', id: 'user-guide/modules/accounting/accounting-general', label: 'Müxabirləşmə sxemləri'},
            {type: 'doc', id: 'user-guide/modules/accounting/taxes', label: 'Vergilər'},
            {type: 'doc', id: 'user-guide/modules/accounting/tax-profile', label: 'Vergi profili'},
            {type: 'doc', id: 'user-guide/modules/accounting/fiscal', label: 'Maliyyə dövrü'},
          ]},
          {type: 'category', label: 'Restoran', collapsed: true, items: [
            {type: 'doc', id: 'user-guide/modules/platform/settings/restaurant-general', label: 'Ayarlar'},
          ]},
          {type: 'category', label: 'İstehsalat', collapsed: true, items: [
            {type: 'doc', id: 'user-guide/modules/platform/settings/manufacturing-general', label: 'Ayarlar'},
          ]},
          {type: 'category', label: 'Təşkilat', collapsed: true, items: [
            {type: 'doc', id: 'user-guide/modules/platform/settings/company', label: 'Şirkət məlumatları'},
            {type: 'doc', id: 'user-guide/modules/platform/settings/branches', label: 'Filiallar'},
            {type: 'doc', id: 'user-guide/modules/hr/employees', label: 'Əməkdaşlar'},
          ]},
          {type: 'category', label: 'İdarəetmə', collapsed: true, items: [
            {type: 'doc', id: 'user-guide/modules/platform/users', label: 'İstifadəçilər'},
            {type: 'doc', id: 'user-guide/modules/platform/settings/roles', label: 'Rollar'},
          ]},
        ]},
      ],
    },
    {type: 'doc', id: 'glossary', label: 'Lüğət'},
    {type: 'doc', id: 'faq', label: 'FAQ'},
  ],
};
