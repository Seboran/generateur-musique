import { fileURLToPath } from 'url';

import { defineVitestConfig } from 'nuxt-vitest/config';

export default defineVitestConfig({
  base: "",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    globals: true,
    environment: "happy-dom",
    coverage: {
      reporter: ['text', 'html', 'json-summary', 'json'],
      provider: 'v8',
    },
    exclude: ["./tests/**", "./node_modules/**"],
  },
})
