import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000,
    open: false,
  },

  build: {
    // Target modern browsers — smaller, faster output
    target: 'esnext',

    // Raise chunk warning threshold (framer-motion is intentionally large)
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // Split vendor chunks so each section only loads what it needs
        manualChunks: {
          'react-core':    ['react', 'react-dom'],
          'framer-motion': ['framer-motion'],
          'lucide-react':  ['lucide-react'],
        },
      },
    },

    // Enable minification passes
    minify: 'esbuild',

    // CSS code splitting — each async chunk gets its own CSS
    cssCodeSplit: true,

    // Source maps only in development
    sourcemap: false,
  },

  // Optimise dep pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react'],
  },
});

