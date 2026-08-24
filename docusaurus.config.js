// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BEIN ERP Docs',
  tagline: 'ERP API və texniki sənədləşdirmə',
  favicon: 'img/favicon.svg',
  url: 'https://docs.beinsystems.az',
  baseUrl: '/',
  organizationName: 'BeinSystems-Az',
  projectName: 'docs',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  i18n: {
    defaultLocale: 'az',
    locales: ['az'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/BeinSystems-Az/docs/edit/master/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/social-card.svg',
    navbar: {
      title: 'BEIN ERP',
      items: [
        {type: 'docSidebar', sidebarId: 'documentation', position: 'left', label: 'Sənədlər'},
        {to: '/docs/api/reference', label: 'API Reference', position: 'left'},
        {href: 'https://github.com/BeinSystems-Az/docs', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Sənədlər',
          items: [
            {label: 'Başlanğıc', to: '/docs/intro'},
            {label: 'Arxitektura', to: '/docs/architecture/overview'},
            {label: 'API Reference', to: '/docs/api/reference'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BEIN Systems.`,
    },
    prism: {
      theme: require('prism-react-renderer').themes.github,
      darkTheme: require('prism-react-renderer').themes.dracula,
    },
  },
};

module.exports = config;
