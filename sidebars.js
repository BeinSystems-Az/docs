/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  documentation: [
    'intro',
    {
      type: 'category',
      label: 'API',
      items: [
        'api/authentication',
        'api/contract',
        'api/endpoints/index',
        {
          type: 'category',
          label: 'Məhsullar',
          items: [
            'api/modules/products/index',
            'api/modules/products/catalog-products',
            'api/modules/products/product-templates',
            'api/modules/products/categories',
            'api/modules/products/units',
            'api/modules/products/product-packagings',
            'api/modules/products/product-attributes',
          ],
        },
        {
          type: 'category',
          label: 'Satış',
          items: ['api/modules/sales/index', 'api/modules/sales/sale-orders', 'api/modules/sales/sale-receipts'],
        },
        {
          type: 'category',
          label: 'Alış',
          items: ['api/modules/purchase/index', 'api/modules/purchase/purchase-orders', 'api/modules/purchase/purchase-receipts'],
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
