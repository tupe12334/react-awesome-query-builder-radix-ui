import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES
    ? "/react-awesome-query-builder-radix-ui/"
    : "/",
  resolve: {
    alias: {
      "@react-awesome-query-builder/radix-ui": path.resolve(
        __dirname,
        "../modules/index.jsx"
      ),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true,
  },
});
