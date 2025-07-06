import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  outDir: "dist",
  outExtension: () => ({ js: ".js" }),
  target: "esnext",
  splitting: false,
  clean: true,
  watch: true,
});
