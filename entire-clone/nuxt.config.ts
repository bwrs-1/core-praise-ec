import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
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
  }
})
