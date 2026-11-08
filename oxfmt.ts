import { defineConfig } from "oxfmt";

export default defineConfig({
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  printWidth: 100,
  sortTailwindcss: {
    stylesheet: "./src/main.css",
    functions: ["clsx", "cn"],
    preserveWhitespace: true,
    preserveDuplicates: true,
  },
  cssDeclarationSorterOrder: "frakto",
  cssDeclarationSorterKeepOverrides: false,
  sortImports: {
    type: "natural",
    order: "asc",
  },
  sortPackageJson: true,
  ignorePatterns: ["package-lock.json", "pnpm-lock.yaml", "yarn.lock"],
});
