// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'WebCodecsPlayer',
      fileName: 'webcodecs-player'
    }
  },
  server: {
    hmr: {
      clientPort: 443
    },
    port: 9000,
    allowedHosts: ['katana.ngrok.dev']
  }
});