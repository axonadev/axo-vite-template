import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.

  return defineConfig({
    plugins: [
      react(),
      VitePWA({
        registerType: "autoUpdate",
        injectRegister: false,

        srcDir: "src",
        filename: "service-worker.js",
        strategies: "injectManifest",

        pwaAssets: {
          disabled: false,
          config: true,
        },

        manifest: {
          name: "testPwa",
          short_name: "testPwa",
          description: "test pwa",
          theme_color: "#ffffff",
        },
        injectManifest: {
          injectionPoint: undefined,
        },

        workbox: {
          globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
          cleanupOutdatedCaches: true,
          clientsClaim: true,
        },

        devOptions: {
          enabled: false,
          navigateFallback: "index.html",
          suppressWarnings: true,
          type: "module",
        },
      }),
    ],
  });
};
