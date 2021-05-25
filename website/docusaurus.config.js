/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Ngx Confirm',
  tagline: 'Angular Ui Component Library',
  url: 'https://npx-confirm.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'pratham-10', // Usually your GitHub org/user name.
  projectName: 'ngx-confirm-documentation', // Usually your repo name.
  themeConfig: {
    liveCodeBlock: {
      playgroundPosition: 'bottom',
    },
    navbar: {
      title: 'Ngx Confirm',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
            {
              label: 'Blogs',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Connect us',
          items: [
            {
              label: 'GitHub',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'GitLab',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'NPM',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
           
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} @nikiphoros/Ngx Confirm.`,
    },
  },
  plugins: ['@docusaurus/theme-live-codeblock'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:'https://github.com/pratham-10/ngx-confirm-documentation.git',
        },
        blog: {
          showReadingTime: true,
          editUrl:'https://github.com/pratham-10/ngx-confirm-documentation.git',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
