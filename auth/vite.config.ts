import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: true,
    watch: {
      usePolling: true,
    },
    port: 5173,
  },
});
