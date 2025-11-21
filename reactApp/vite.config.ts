import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import removeConsole from 'vite-plugin-remove-console';

function makeChunks(id: string) {
  if (id.includes('node_modules/react')) return 'react';
  if (id.includes('node_modules')) return 'vendor';
  return 'main';
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), removeConsole()],
  build: {
    rollupOptions: {
      output: { manualChunks: makeChunks },
    },
  },
});
