import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const env = loadEnv(mode, process.cwd());
  console.log(env);
  const { VITE_APP_ENV, VITE_BASE_URL } = env;
  return {
    define: {
      "process.env": {
        VITE_APP_ENV: VITE_APP_ENV,
        VITE_BASE_URL: VITE_BASE_URL,
      },
    },
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    // server: {
    //   host: true,
    //   port: 5173,
    //   proxy: {
    //     "/api": {
    //       target: "http://127.0.0.1:5000",
    //       ws: false,
    //       changeOrigin: true,
    //     },
    //   },
    // },
  }
});
