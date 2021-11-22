const { description } = require('../../package')
//const apiSideBar = require('./api-sidebar.json');
module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Remult',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: '/logo.png',
    repo: 'remult/remult',
    editLinks: true,
    docsDir: 'docs',
    lastUpdated: false,
    smoothScroll: true,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Blog',
        link: '/blog/',
      },
      /*  {
          text: 'Tutorials',
          link: '/tutorials/',
        },*/
      /*,
            {
              text: 'Config',
              link: '/config/'
            },
            {
              text: 'VuePress',
              link: 'https://v1.vuepress.vuejs.org'
            }*/
    ],
    sidebar: {
      '/blog/': [
        {
          title: 'Blog',
          collapsable: false,
          children: [
            'architecture',
            'further-learning',
            'VSCode-keyboard-shortcuts'

          ]
        },
        {
          title: 'Setup and configuration',
          collapsable: false,
          children: [
            '05-Installing-a-Dev-Machine',
            'using-postgres-on-your-dev-machine'
          ]
        },
        {
          title: 'experimental',
          collapsable: false,
          children: [
            'angular-for-non-web-developers',
            'adding-an-angular-component-and-route',
            'dialog'
            //  'grid-settings-and-data-grid',
          ]
        }],
      '/guide/': [
        {
          title: 'Getting Started',
          collapsable: false,
          children: [
            '']
        },
        {
          title: 'Tutorials',
          collapsable: false,
          children: [
            'tutorial-react',
            'tutorial-angular'
          ]
        },
        {
          title: 'Concepts',
          collapsable: false,
          children: [
            'entity-relations',
            'backendMethods',
            'field-types'
          ]
        },
        {
          title: 'Advanced Topics',
          collapsable: false,
          children: [
            'rest-api',
            'adding-postgres',
            'adding-swagger',
            'adding-graphql',
            'lazy-loading-of-related-entities',
            'using-server-only-packages',
            'running-sql-on-the-server'
          ]
        },
        {
          title: 'API Reference',
          collapsable: false,
          children: [
            'ref_entity',
            'ref_field',
            'ref_backendmethod',
            'ref_repository',
            'ref_entitywhere',
            'ref_entityorderby'


          ]
        }

      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['vuepress-plugin-code-copy', true],
    ['@vuepress/google-analytics',
      {
        'ga': 'UA-212489509-1'
      }]
  ]
}
