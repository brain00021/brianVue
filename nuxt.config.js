const skin = `assets`;
const path = require('path');

const seo = {
  title: 'OCMS',
  meta: [{
    keywords: 'OCMS',
    description: 'OCMS Website',
  }],
};
module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ].concat(seo.meta),
    link: [
      { rel: 'icon', 
      type: 'image/x-icon', 
      href: '/favicon.ico' }
    ],
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#111111' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    `@/assets/scss/all.scss`,
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  dir: {
    assets: `/assets`,
    layouts: `themes/layouts`,
    middleware: `/middleware`,
    pages: `themes/pages`,
    static: `/static`,
    store: `store`
  },
  /*
  ** Build configuration
  */
  axios: {
    
  },
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    extend(config, ctx) {
      const rootPath = path.resolve(__dirname)

      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            configFile: '.eslintrc.js'
          }
        })
      }

      config.module.rules.push({
        test: /\.js$/,
        loader: 'babel-loader',
        include: /(node_modules)/,
        options: {
            presets: ['@babel/env', '@babel/react']
        }
      })

      config.resolve.alias['vue$'] = 'vue/dist/vue.esm.js'
      config.resolve.alias['root'] = `${rootPath}`
      config.resolve.alias['@assets'] = `${rootPath}/assets`
      config.resolve.alias['@static'] = `${rootPath}/static`
      config.resolve.alias['@themes'] = `${rootPath}/themes`
    }
  },
  
}
