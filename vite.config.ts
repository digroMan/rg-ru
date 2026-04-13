import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import readableClassnames from "vite-plugin-readable-classnames";

// https://vite.dev/config/
export default defineConfig({
  base: "/rg-ru/",
  plugins: [react(), readableClassnames()],
});
