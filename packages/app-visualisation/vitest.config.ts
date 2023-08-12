import { defineVitestConfig } from 'nuxt-vitest/config'

export default defineVitestConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    environmentOptions: {
      nuxt: {
        rootDir: __dirname,
      },
    },
    include: ['**/*.{test, spec}.ts'],
    coverage: {
      reporter: ['text', 'json', 'json-summary', 'html'],
    },
  },
})
