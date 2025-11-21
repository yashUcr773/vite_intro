import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    minify: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        admin: resolve(__dirname, './admin/index.html'),
      },
    },
  },
  server: {
    port: 4000,
    strictPort: true,
  },
  // envPrefix: 'SOME_PREFIX_',
});
