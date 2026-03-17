import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'main.ts'),
      name: 'mathLib',
      formats: ['es'],
    },
    minify: false,
  },
});
