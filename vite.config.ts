import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [tanstackStart({
    server: { entry: "server" },
  }), react(), tailwindcss(), tsconfigPaths({ projects: ["./tsconfig.json"] }), cloudflare({
    viteEnvironment: {
      name: "ssr"
    }
  })],
  resolve: {
    alias: {
      "@": `${process.cwd()}/src`,
    },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
  css: { transformer: "lightningcss" },
  server: { host: "::", port: 8080 },
});