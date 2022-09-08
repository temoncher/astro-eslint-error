module.exports = {
  extends: ["plugin:@typescript-eslint/recommended"],
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
      files: ["*.astro"],
      extends: ["plugin:astro/recommended"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
    // Without following override `.astro` files do not lint at all and complain about not having `parserOptions.project` set
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