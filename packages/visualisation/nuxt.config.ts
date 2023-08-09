// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  sourcemap: {
    server: true,
    client: true,
  },
  modules: ['@nuxtjs/tailwindcss'],
  components: [
    {
      path: '~/components/musique',
    },
    {
      path: '~/components/sudoku',
    },
    '~/components',
  ],
  vite: {
    vue: {
      script: {
        defineModel: true,
      },
    },
  },
})
