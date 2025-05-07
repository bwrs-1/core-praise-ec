export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.css"],
  build: {
    transpile: [],
  },
  runtimeConfig: {
    public: {
      shopifyDomain: "your-shop.myshopify.com",
      storefrontToken: "your-storefront-token"
    }
  }
});