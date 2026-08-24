/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  documentation: [
    'intro',
    {
      type: 'category',
      label: 'API',
      items: ['api/authentication', 'api/contract', 'api/reference'],
    },
    {
      type: 'category',
      label: 'Arxitektura',
      items: ['architecture/overview', 'architecture/tenancy'],
    },
    'modules/index',
    'contributing',
  ],
};
