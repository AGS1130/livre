import path from "path";
import { defineConfig } from "vite";

const fileName = {
  es: "index.mjs",
  cjs: "index.js"
};

export default defineConfig({
  base: "./",
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: format => fileName[format]
    }
  }
});
