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
    include: ['./**/*.{test, spec}.ts'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/coverage/**',
      '**/lib-effondrement/**',
    ],
    coverage: {
      reporter: ['text', 'json', 'json-summary', 'html'],
    },
  },
})
