// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

export default [js.configs.recommended, {
   files: ["**/*.ts", "**/*.tsx"],
   languageOptions: {
      parser: tsParser,
      parserOptions: {
         ecmaVersion: "latest",
         sourceType: "module",
      },
   },
   plugins: {
      "@typescript-eslint": tsPlugin,
   },
   rules: {
      ...tsPlugin.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
   },
}, {
   ignores: ["**/dist/**", "**/node_modules/**", "**/.turbo/**", "**/storybook-static/**"],
}, ...storybook.configs["flat/recommended"]]; 