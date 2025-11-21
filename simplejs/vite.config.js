import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    minify: false,
  },
  server: {
    port: 4000,
    strictPort: true,
  },
  // envPrefix: 'SOME_PREFIX_',
});
