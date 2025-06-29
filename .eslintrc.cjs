module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2021,
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
    'plugin:prettier/recommended',
    'plugin:vitest/recommended',
  ],
  plugins: ['@typescript-eslint', 'vitest'],
  rules: {
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    'prettier/prettier': ['error', { semi: true }],
    'no-restricted-syntax': [
      'error',
      {
        selector: "CallExpression[callee.name='it']",
        message: 'Use `test()` instead of `it()` for consistency.',
      },
    ],
  },
};
