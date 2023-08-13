import { defineProject } from 'vitest/config'

export default defineProject({
  test: {
    globals: true,
    include: ['./**/*.{test,spec}.ts'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/coverage/**',
      '**/app-visualisation/**',
    ],
  },
})
