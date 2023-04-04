import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    // proxy: {
    //   //'/( les routes qui parte du client )': '( mon addresse de serveur )'
    //   "/api": {
    //     target: "http://localhost:3000/",
    //     changeOrigin: true,
    //   }
    // }
  }
});
