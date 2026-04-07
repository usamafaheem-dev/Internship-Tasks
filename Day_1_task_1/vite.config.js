import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');

  const apiTarget = env.VITE_API_BASE_URL || 'https://kyakhao-api.vertexaitec.com';

  return {
    plugins: [react()],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },

    server: {
      port: 5173,
      open: true,
      proxy: {
        // In dev, forward /api/* to backend to avoid CORS
        '/api': {
          target: apiTarget,
          changeOrigin: true,
          secure: true,
          rewrite: (path) => path, // keep path as-is
        },
      },
    },

    build: {
      outDir: 'dist',
      sourcemap: false,
      // Split vendor chunks for better caching
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
            ui: ['framer-motion', 'react-toastify'],
          },
        },
      },
    },

    // Expose env vars with VITE_ prefix to the client bundle
    define: {
      __APP_VERSION__: JSON.stringify(env.VITE_APP_VERSION || '1.0.0'),
    },
  };
});
