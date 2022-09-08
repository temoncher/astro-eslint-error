module.exports = {
  extends: ["plugin:@typescript-eslint/recommended"],
  // Parse the script in `.astro` as TypeScript by adding the following configuration.
  // It's the setting you need when using TypeScript.
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
  },
  rules: {
    "@typescript-eslint/no-unsafe-assignment": 2,
    "@typescript-eslint/no-unsafe-member-access": 2,
    "@typescript-eslint/no-unsafe-call": 2,
    "@typescript-eslint/no-unsafe-return": 2,
  },
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      extends: ["plugin:astro/recommended"],
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
    {
      files: [
        ".eslintrc.js",
        "astro.config.mjs",
      ],
      parserOptions: {
        project: "tsconfig.node.json",
      },
    },
  ],
}