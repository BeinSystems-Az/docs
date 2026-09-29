// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BEIN ERP Docs',
  tagline: 'ERP API və Təlimat',
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
        {to: '/docs/api', label: 'API', position: 'left'},
        {to: '/docs/user-guide', label: 'Təlimat', position: 'left'},
        {to: '/docs/glossary', label: 'Lüğət', position: 'left'},
        {to: '/docs/faq', label: 'FAQ', position: 'left'},
        {href: 'https://github.com/BeinSystems-Az/docs', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Sənədlər',
          items: [
            {label: 'API', to: '/docs/api'},
            {label: 'Təlimat', to: '/docs/user-guide'},
            {label: 'Lüğət', to: '/docs/glossary'},
            {label: 'FAQ', to: '/docs/faq'},
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
