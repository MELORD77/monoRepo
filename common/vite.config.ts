import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    hmr: {
      port: 5175,
    },
    port: 5175,
    watch: {
      usePolling: true,
    },
  },
});
