const path = require('path');

module.exports = {
  title: 'XMars UI',
  tagline: 'A complete tool for you to make a perfect UI',
  url: 'https://xmars-open-source.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'xmars-open-source', // Usually your GitHub org/user name.
  projectName: 'xmars-ui-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'XMars UI',
      logo: {
        alt: 'Site logo',
        src: 'img/logo.png',
      },
      links: [
        {to: 'docs/introduction/getting-started', label: 'Getting Started', position: 'right'},
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/DmitryOlkhovoi/XMarsUI',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      // style: 'dark',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Style Guide',
      //         to: 'docs/doc1',
      //       },
      //       {
      //         label: 'Second Doc',
      //         to: 'docs/doc2',
      //       },
      //     ],
      //   },
        // {
        //   title: 'Community',
        //   items: [
        //     // {
        //     //   label: 'Stack Overflow',
        //     //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     // },
        //     // {
        //     //   label: 'Discord',
        //     //   href: 'https://discordapp.com/invite/docusaurus',
        //     // },
        //   ],
        // },
        // {
        //   title: 'Social',
        //   items: [
        //     // {
        //     //   label: 'Blog',
        //     //   to: 'blog',
        //     // },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //     // {
        //     //   label: 'Twitter',
        //     //   href: 'https://twitter.com/docusaurus',
        //     // },
        //   ],
        // },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} XMars.io`,
    },
    disableDarkMode: true,
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [path.resolve(__dirname, './webpack.plugin.js')],
};