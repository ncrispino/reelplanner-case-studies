// @ts-check
import { defineConfig } from "astro/config";

// base "/" (choice A1): the site sits at a domain's root. For a GitHub Pages project page, set base: "/dylan-site/".
export default defineConfig({
  output: "static",
  base: "/",
  trailingSlash: "always",
  build: { format: "directory" },
});
