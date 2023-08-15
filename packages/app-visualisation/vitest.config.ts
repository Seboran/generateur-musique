import { defineProject } from 'vitest/config'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import vue from '@vitejs/plugin-vue'

export default defineProject({
  test: {
    globals: true,
    environment: 'happy-dom',
    environmentOptions: {
      nuxt: {
        rootDir: __dirname,
      },
    },
    include: ['./**/*.{test, spec}.ts'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/coverage/**',
      '**/lib-effondrement/**',
    ],
  },
  plugins: [
    vue({}),
    Components({
      dirs: ['./components'],
    }),
    AutoImport({
      imports: [
        'vitest',
        'vue',
        'vue-router',
        {
          '#imports': [
            'useNuxtApp',
            'useBaseFetch',
            'useRuntimeConfig',
            'useState',
            'useLazyAsyncData',
            'useLocalisationOptions',
            'useFavoriteLocalisation',
            'useInputValidation',
          ],
        },
      ],
    }),
  ],
})
