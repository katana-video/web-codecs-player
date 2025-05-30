import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Root directory
  root: '.',
  
  // Build configuration
  build: {
    // Output directory
    outDir: 'dist',
    
    // Library mode for creating distributable packages
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'KatanaVideo',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    
    // Rollup-specific options
    rollupOptions: {
      // Make sure to externalize dependencies that shouldn't be bundled
      external: [],
      output: {
        // Global variables to use for externalized dependencies
        globals: {},
      },
    },
    
    // Enable source maps
    sourcemap: true,
  },
  
  // Development server configuration
  server: {
    port: 9000,
    hmr: {
      clientPort: 443
    },
    allowedHosts: ['katana.ngrok.dev']
  },
  
  // Properly handle Web Worker imports
  worker: {
    format: 'es',
  },
  
  // Optimize dependencies
  optimizeDeps: {
    // Include files that aren't directly imported
    include: ['localforage'],
  },
});