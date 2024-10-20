import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    hmr: {
      port: 5174,
    },
    port: 5174,
    watch: {
      usePolling: true,
    },
  },
});
