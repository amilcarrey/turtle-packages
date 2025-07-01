import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  external: ["react", "react-dom"],
  minify: true,
  clean: true,
  sourcemap: true,
  treeshake: true,
  splitting: false,
  // Keep React JSX transform for better compatibility
  jsx: "automatic",
  target: "es2020",
  // Ensure proper module resolution
  platform: "neutral",
});
