import { defineVitestConfig } from 'nuxt-vitest/config'

export default defineVitestConfig({
  // any custom vitest config you require
  test: {
    coverage: {
      reporter: ['text', 'html', 'json-summary', 'json'],
      provider: 'v8',
    },
  },
})
