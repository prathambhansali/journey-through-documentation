const users = [
    {
      caption: 'Pratham',
      image: '/test-site/img/docusaurus.svg',
      infoLink: 'https://www.example.com',
      pinned: true,
    },
  ];
  
  const siteConfig = {
    title: 'Ngx Confirm',
    tagline: 'Angular Ui Component Library',
    url: 'https://npx-confirm.netlify.app/',
    baseUrl: '/',
    defaultVersionShown: '1.0.0',
    organizationName: 'pratham-10',
    projectName: 'ngx-confirm-documentation', 
    noIndex: false,
    // For no header links in the top nav bar -> headerLinks: [],
    headerLinks: [
      {doc: 'doc1', label: 'Docs'},
      {page: 'help', label: 'Help'},
      {search: true},
      {blog: true},
    ],
    headerIcon: 'img/docusaurus.svg',
    favicon: 'img/favicon.png',
    colors: {
      primaryColor: '#2E8555',
      secondaryColor: '#205C3B',
    },
    editUrl:'https://github.com/pratham-10/ngx-confirm-documentation.git',
    users,
    disableHeaderTitle: true,
    disableTitleTagline: true,
    separateCss: ['static/css/non-docusaurus', 'static/assets/separate-css'],
    footerIcon: 'img/docusaurus.svg',
    translationRecruitingLink: 'https://crowdin.com/project/docusaurus',
    // algolia: {
    //   apiKey: '0f9f28b9ab9efae89810921a351753b5',
    //   indexName: 'github',
    // },
    // gaTrackingId: 'UA-12345678-9',
    // highlight: {
    //   theme: 'default',
    // },
    markdownPlugins: [
      function foo(md) {
        md.renderer.rules.fence_custom.foo = function (
          tokens,
          idx,
          options,
          env,
          instance,
        ) {
          return '<div class="foo">bar</div>';
        };
      },
    ],
    scripts: [
      'https://docusaurus.io/slash.js',
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
        async: true,
      },
    ],
    stylesheets: [
      'https://docusaurus.io/style.css',
      {
        href: 'http://css.link',
        type: 'text/css',
      },
    ],
    // facebookAppId: '1615782811974223',
    // facebookComments: true,
    // facebookPixelId: '352490515235776',
    // twitter: 'true',
    // twitterUsername: 'docusaurus',
    // twitterImage: 'img/docusaurus.png',
    // ogImage: 'img/docusaurus.png',
    cleanUrl: true,
    scrollToTop: true,
    scrollToTopOptions: {
      zIndex: 100,
    },
    // Remove the HTML tags and HTML tags content before generating the slug
    slugPreprocessor: (slugBase) =>
      slugBase.replace(/<([^>]+?)([^>]*?)>(.*?)<\/\1>/gi, ''),
  };
  
  module.exports = siteConfig;