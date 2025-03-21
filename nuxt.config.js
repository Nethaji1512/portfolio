// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ["vuetify/styles/main.sass",
    "@mdi/font/css/materialdesignicons.css"],

  build: {
    transpile: ["vuetify"]
  },

  devServer: {
    port: 8080,
  },

  compatibilityDate: "2025-03-21",
})