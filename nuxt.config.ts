// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['/assets/styles.css'],
  devtools: { enabled: false },
  build: {
    transpile: ['gsap'],
  },
  compatibilityDate: '2024-04-03',
});
