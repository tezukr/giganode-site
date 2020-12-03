module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Tezos Giga Node',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Your reliable Tezos RPC endpoints:\n' +
          'Mainnet: https://mainnet-tezos.giganode.io\n' +
          'Edonet: https://testnet-tezos.giganode.io\n'+
          'Testnet: https://testnet-tezos.giganode.io\n' },
      // Open graph meta-tags
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://giganode.io/' },
      { property: 'og:image', content: '/og.png' },
      { property: 'og:site_name', content: 'Tezos Giga Node' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  css: [
    // SCSS file in the project
    '@/assets/scss/main.scss'
  ],
  modules: [
    '@nuxtjs/style-resources',
    'bootstrap-vue/nuxt',
    'vue-scrollto/nuxt',
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set:'@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ]
  ],
  styleResources: {
    scss: [
      'assets/scss/_variables.scss',
      'assets/scss/_mixins.scss'
    ]
  },
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    componentPlugins: [
      'LayoutPlugin',
      'ButtonPlugin',
      'TablePlugin',
      'TooltipPlugin'
    ]
  },
};

