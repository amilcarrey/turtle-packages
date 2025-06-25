import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format) => `${format}/index.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "lucide-react",
        "class-variance-authority",
        "@turtledev/ui",
        "jotai",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsx",
        },
      },
    },
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
  },
});
