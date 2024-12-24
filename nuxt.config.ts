// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxthq/studio", "@nuxt/icon"],

  routeRules: {
    "/": { prerender: true },
  },
  css: ["~/assets/scss/app.scss"],

  compatibilityDate: "2024-12-24",
});