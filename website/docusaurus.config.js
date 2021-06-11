/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Journey in Documnetation",
  tagline: 'tagline',
  url: "https://npx-confirm.netlify.app/",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/white.png",
  organizationName: "pratham-10",
  projectName: "imp-documentation",
  themeConfig: {
    liveCodeBlock: {
      playgroundPosition: "bottom",
    },
    plugins: ["@docusaurus/theme-live-codeblock"],
    navbar: {
      title: "Prathmesh Bhansali",
      logo: {
        alt: "Site Logo",
        src: "img/favicon.png",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "right",
          label: "Tutorial",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      logo: {
        alt: "Site Logo",
        src: "img/logo.png",
      },
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "LinkedIn",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Facebook",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Instagram",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
          ],
        },
        {
          title: "Connect us",
          items: [
            {
              label: "GitHub",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "GitLab",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "NPM",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "Blogs",
          items: [
            {
              label: "Medium",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Hashnode",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Dev.to",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} @codesleuth/Prathmesh Bhansali.`,
    },
  },
  
  presets: [
    [
      "@docusaurus/preset-classic",
      {        
        debug: true,
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/pratham-10/ngx-confirm-documentation.git",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/pratham-10/ngx-confirm-documentation.git",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        pages: {},
        // Will be passed to @docusaurus/plugin-content-sitemap (false to disable)
        sitemap: {},
        plugins: ['plugin-content-blog'],
      },
    ],
  ],
};
