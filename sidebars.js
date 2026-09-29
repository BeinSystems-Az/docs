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



module.exports = {
  documentation: [
    {
      type: 'category',
      label: 'API',
      link: {type: 'doc', id: 'api/index'},
      collapsed: false,
      items: [
        {type: 'doc', id: 'intro', label: 'Versiya və əsas URL'},
        {type: 'doc', id: 'api/authentication', label: 'Autentifikasiya və kontekst'},
        {type: 'doc', id: 'api/contract', label: 'Ümumi kontrakt'},
        {type: 'category', label: 'Şirkətim', collapsed: true, items: [
          {type: 'doc', id: 'modules/platform/index', label: 'Platforma API-si'},
          ...resourceItems('platform').filter(({id}) => !['modules/platform/resources/settings', 'modules/platform/resources/modules', 'modules/platform/resources/document-number-configuration'].includes(id)),
          {type: 'doc', id: 'modules/automation/index', label: 'Avtomatlaşdırma API-si'},
          ...resourceItems('automation'),
          {type: 'doc', id: 'modules/integrations/index', label: 'İnteqrasiyalar API-si'},
          ...resourceItems('integrations'),
          {type: 'doc', id: 'modules/network/index', label: 'Şirkətlərarası şəbəkə API-si'},
          ...resourceItems('network'),
        ]},
        {type: 'category', label: 'Məhsul', collapsed: true, items: [
          {type: 'doc', id: 'modules/catalog/index', label: 'Məhsul kataloqu API-si'},
          ...[
            'api/modules/products/catalog-products', 'api/modules/products/product-templates',
            'api/modules/products/categories', 'api/modules/products/units',
            'api/modules/products/product-packagings', 'api/modules/products/product-attributes',
          ].map((id) => ({type: 'doc', id})),
          ...resourceItems('stock').filter(({id}) => id.endsWith('/stock-lot')),
        ]},
        {type: 'category', label: 'CRM', collapsed: true, items: [
          {type: 'doc', id: 'modules/crm/index', label: 'CRM API-si'},
          ...resourceItems('crm'),
        ]},
        {type: 'category', label: 'Təchizat', collapsed: true, items: [
          {type: 'doc', id: 'modules/purchase/index', label: 'Təchizat API-si'},
          {type: 'doc', id: 'api/modules/purchase/purchase-receipts', label: 'Alışlar'},
          {type: 'doc', id: 'api/modules/purchase/purchase-orders', label: 'Sifarişlər'},
          ...resourceItems('stock').filter(({id}) => id.endsWith('/product-suppliers')) ,
          ...resourceItems('accounting').filter(({id}) => id.endsWith('/purchase-invoice') || id.endsWith('/purchase-return')),
        ]},
        {type: 'category', label: 'Satış', collapsed: true, items: [
          {type: 'doc', id: 'modules/sales/index', label: 'Satış API-si'},
          {type: 'doc', id: 'api/modules/sales/sale-receipts', label: 'Satışlar'},
          {type: 'doc', id: 'api/modules/sales/sale-orders', label: 'Sifarişlər'},
          ...resourceItems('accounting').filter(({id}) => id.endsWith('/sale-invoice') || id.endsWith('/sale-return')),
        ]},
        {type: 'category', label: 'Pərakəndə', collapsed: true, items: [
          {type: 'doc', id: 'modules/pos/index', label: 'Pərakəndə API-si'},
          ...resourceItems('pos').filter(({id}) => !id.endsWith('/pos-register') && !id.endsWith('/pos-payment-type') && !id.endsWith('/pos-cash-reason')),
        ]},
        {type: 'category', label: 'Anbar', collapsed: true, items: [
          {type: 'doc', id: 'modules/stock/index', label: 'Anbar API-si'},
          {type: 'doc', id: 'modules/stock/resources/stock-document', label: 'Daxilolmalar'},
          {type: 'doc', id: 'modules/stock/resources/deliveries', label: 'Çıxışlar'},
          {type: 'doc', id: 'modules/stock/resources/transfers', label: 'Yerdəyişmələr'},
          {type: 'doc', id: 'modules/stock/resources/scrap', label: 'Silinmələr'},
          {type: 'doc', id: 'modules/stock/resources/inventory', label: 'İnventarizasiyalar'},
          {type: 'category', label: 'Anbar Hesabatları', collapsed: true, items: [
            ...resourceItems('reports').filter(({id}) => id.endsWith('/stock-report')) ,
            ...resourceItems('stock').filter(({id}) => id.endsWith('/stock-reorder-rules') || id.endsWith('/stock-replenishment')) ,
          ]},
          {type: 'category', label: 'Konfiqurasiya', collapsed: true, items: [
            ...resourceItems('stock').filter(({id}) => id.endsWith('/stock') || id.endsWith('/stock-location')),
          ]},
        ]},
        {type: 'category', label: 'Hesabatlar', collapsed: true, items: [
          {type: 'doc', id: 'modules/reports/index', label: 'Hesabatlar API-si'},
          ...resourceItems('reports').filter(({id}) => !id.endsWith('/stock-report') && !id.endsWith('/accounting-report-definition')),
        ]},
        {type: 'category', label: 'Maliyyə', collapsed: true, items: [
          ...resourceItems('accounting').filter(({id}) => [
            'debt', 'direct-expense', 'finance', 'payment', 'wallet', 'wallet-transfer',
          ].some((name) => id.endsWith(`/resources/${name}`))),
        ]},
        {type: 'category', label: 'HR', collapsed: true, items: [
          {type: 'doc', id: 'modules/hr/index', label: 'HR API-si'},
          ...resourceItems('hr'),
        ]},
        {type: 'category', label: 'Mühasibatlıq', collapsed: true, items: [
          {type: 'doc', id: 'modules/accounting/index', label: 'Mühasibatlıq API-si'},
          ...resourceItems('accounting').filter(({id}) => ![
            'purchase-invoice', 'purchase-return', 'sale-invoice', 'sale-return', 'currency',
            'currency-rate', 'expense-category', 'tax', 'tax-profile', 'debt', 'direct-expense', 'finance',
            'payment', 'wallet', 'wallet-transfer', 'fixed-asset', 'fixed-asset-category',
            'fixed-asset-sale', 'fixed-asset-scrap', 'fixed-asset-transfer', 'account',
            'accounting-report-definition',
          ].some((name) => id.endsWith(`/resources/${name}`))),
          {type: 'category', label: 'Hesabatlar', collapsed: true, items: [
            ...resourceItems('reports').filter(({id}) => id.endsWith('/accounting-report-definition')),
          ]},
          {type: 'category', label: 'Konfiqurasiya', collapsed: true, items: [
            ...resourceItems('accounting').filter(({id}) => id.endsWith('/account')) ,
          ]},
          {type: 'category', label: 'Əsas vəsaitlər', collapsed: true, items: [
            ...resourceItems('accounting').filter(({id}) => [
              'fixed-asset', 'fixed-asset-category', 'fixed-asset-sale', 'fixed-asset-scrap', 'fixed-asset-transfer',
            ].some((name) => id.endsWith(`/resources/${name}`))),
          ]},
        ]},
        {type: 'category', label: 'İstehsalat', collapsed: true, items: [
          {type: 'doc', id: 'modules/manufacturing/index', label: 'İstehsalat API-si'},
          ...resourceItems('manufacturing'),
        ]},
        {type: 'category', label: 'Ayarlar', collapsed: true, items: [
          {type: 'category', label: 'Sistem', collapsed: true, items: [
            {type: 'doc', id: 'modules/platform/resources/settings', label: 'Ümumi ayarlar'},
            ...resourceItems('platform').filter(({id}) => id.endsWith('/modules') || id.endsWith('/document-number-configuration')),
            {type: 'doc', id: 'modules/output/index', label: 'Çap API-si'},
            ...resourceItems('output'),
          ]},
          {type: 'category', label: 'Online mağaza', collapsed: true, items: [
            {type: 'doc', id: 'modules/store/index', label: 'Online mağaza API-si'},
            ...resourceItems('store'),
          ]},
          {type: 'category', label: 'Məhsul', collapsed: true, items: [
            ...resourceItems('catalog'),
          ]},
          {type: 'category', label: 'Pərakəndə', collapsed: true, items: [
            ...resourceItems('pos').filter(({id}) => id.endsWith('/pos-register') || id.endsWith('/pos-payment-type') || id.endsWith('/pos-cash-reason')),
          ]},
          {type: 'category', label: 'Maliyyə', collapsed: true, items: [
            ...resourceItems('accounting').filter(({id}) => id.endsWith('/currency') || id.endsWith('/currency-rate') || id.endsWith('/expense-category')),
          ]},
          {type: 'category', label: 'Mühasibatlıq', collapsed: true, items: [
            ...resourceItems('accounting').filter(({id}) => id.endsWith('/tax') || id.endsWith('/tax-profile')),
          ]},
          {type: 'category', label: 'Təşkilat', collapsed: true, items: [
            {type: 'doc', id: 'modules/access/index', label: 'İstifadəçi və giriş API-si'},
            ...resourceItems('access').filter(({id}) => id.endsWith('/tenant') || id.endsWith('/branch')),
          ]},
          {type: 'category', label: 'İdarəetmə', collapsed: true, items: [
            ...resourceItems('access').filter(({id}) => !id.endsWith('/tenant') && !id.endsWith('/branch')),
          ]},
        ]},
      ],
    },
    {
      type: 'category',
      label: 'Təlimat',
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
