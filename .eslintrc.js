// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
module.exports = {
  ignorePatterns: ['apps/**', 'packages/**'],
  extends: [
    '@vizendjs/eslint-config/library.js',
    '@vizendjs/eslint-config/app.js',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
};
