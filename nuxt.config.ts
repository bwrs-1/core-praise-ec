import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [], // Vuetifyプラグインを追加
  css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.css'],
  build: {
    transpile: ['vuetify']
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
    preset: 'vercel',  // 追加：Vercel用ビルド出力に変更
    storage: {
      data: {
        driver: 'vercelKV'
      }
    }
  }
})
