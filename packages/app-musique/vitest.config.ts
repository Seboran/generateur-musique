import { fileURLToPath } from 'node:url'
import { configDefaults, defineProject } from 'vitest/config'

import vue from '@vitejs/plugin-vue'

export default defineProject({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'happy-dom',
    exclude: [...configDefaults.exclude, 'e2e/*'],
    root: fileURLToPath(new URL('./', import.meta.url)),
  },
})
