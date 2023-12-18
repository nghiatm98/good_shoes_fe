import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    open: true,
    host: true,
    port: 5173,
    proxy: {
      "api/v1": {
        target: "http://good-shoe.tr29.store",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    }
  },
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
});
