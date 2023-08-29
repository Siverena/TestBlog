import { fileURLToPath } from 'url';
export default defineNuxtConfig({
  alias: {
    images: fileURLToPath(new URL('./assets/img', import.meta.url)),
    scss: fileURLToPath(new URL('./assets/scss', import.meta.url)),
    fonts: fileURLToPath(new URL('./assets/fonts', import.meta.url)),
  },
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
      extensions: ['.vue'],
    },
    {
      path: '~/elements',
      pathPrefix: false,
      extensions: ['.vue'],
    },
  ],
  pinia: {
    autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
  },
  modules: ['@pinia/nuxt'],
  css: ['~/assets/scss/main.scss'],
  pages: true,
});
