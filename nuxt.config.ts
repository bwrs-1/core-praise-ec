import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [], // Vuetifyプラグインを追加
  css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.css'], // Vuetifyとアイコンのスタイル
  build: {
    transpile: ['vuetify'], // Vuetifyをトランスパイル対象に追加
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  runtimeConfig: {
    public: {
      shopifyDomain: "cptr00-1d.myshopify.com",
      storefrontToken: "95f62b62ae4ef651629c03c1ad304f19"
    }
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap'
        }
      ]
    }
  },
  nitro: {
    storage: {
      data: {
        driver: 'vercelKV'
        /* Vercel KV driver options */
      }
    }
  }
})
