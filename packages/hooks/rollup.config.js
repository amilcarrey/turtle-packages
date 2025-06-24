import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import tsconfigPaths from "rollup-plugin-tsconfig-paths";
import { readFileSync } from "fs";

const packageJson = JSON.parse(readFileSync("./package.json", "utf-8"));

export default [
   {
      external: [
         "react",
         "react-dom",
         "@turtledev/api",
         "@tanstack/react-query",
         "@tanstack/query-sync-storage-persister",
         "@tanstack/react-query-persist-client",
         "@wagmi/core",
         "wagmi",
         "zod",
         /node_modules/
      ],
      input: "src/index.ts",
      output: [
         {
            file: packageJson.main,
            format: "cjs",
            sourcemap: true,
         },
         {
            file: packageJson.module,
            format: "esm",
            sourcemap: true,
         },
      ],
      plugins: [
         resolve({
            preferBuiltins: false,
         }),
         tsconfigPaths(),
         commonjs(),
         typescript({
            tsconfig: "./tsconfig.json",
            noEmit: true,
            declaration: false,
            outDir: "dist",
         }),
         terser(),
      ],
   },
]; 