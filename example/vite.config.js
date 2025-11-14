import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@react-awesome-query-builder/radix-ui': path.resolve(__dirname, '../modules/index.jsx'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
