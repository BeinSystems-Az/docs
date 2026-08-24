/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  documentation: [
    'intro',
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api/authentication',
        'api/contract',
        'api/endpoints/index',
        {
          type: 'category',
          label: 'Məhsul kataloqu',
          items: [
            {type: 'doc', id: 'api/modules/products/index', label: 'İcmal'},
            {type: 'doc', id: 'api/modules/products/catalog-products', label: 'Məhsullar'},
            {type: 'doc', id: 'api/modules/products/product-templates', label: 'Məhsul şablonları'},
            {type: 'doc', id: 'api/modules/products/categories', label: 'Kateqoriyalar'},
            {type: 'doc', id: 'api/modules/products/units', label: 'Ölçü vahidləri'},
            {type: 'doc', id: 'api/modules/products/product-packagings', label: 'Qablaşdırmalar'},
            {type: 'doc', id: 'api/modules/products/product-attributes', label: 'Atributlar'},
          ],
        },
        {
          type: 'category',
          label: 'Satış',
          items: [
            {type: 'doc', id: 'api/modules/sales/index', label: 'İcmal'},
            {type: 'doc', id: 'api/modules/sales/sale-orders', label: 'Satış sifarişləri'},
            {type: 'doc', id: 'api/modules/sales/sale-receipts', label: 'Satış qəbzləri'},
          ],
        },
        {
          type: 'category',
          label: 'Satınalma',
          items: [
            {type: 'doc', id: 'api/modules/purchase/index', label: 'İcmal'},
            {type: 'doc', id: 'api/modules/purchase/purchase-orders', label: 'Alış sifarişləri'},
            {type: 'doc', id: 'api/modules/purchase/purchase-receipts', label: 'Alış qəbzləri'},
          ],
        },
        'api/coverage',
      ],
    },
    {
      type: 'category',
      label: 'Arxitektura',
      items: ['architecture/overview', 'architecture/tenancy', 'architecture/business-documents'],
    },
    'modules/index',
    'contributing',
  ],
};
