/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  documentation: [
    'intro',
    {
      type: 'category',
      label: 'API',
      items: ['api/authentication', 'api/contract', 'api/reference', 'api/coverage'],
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
