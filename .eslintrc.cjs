module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2021,
    sourceType: 'module',
    extraFileExtensions: ['.vue']
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
    'plugin:prettier/recommended' // ✅ use Prettier as ESLint rule set
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    'prettier/prettier': ['error', { semi: true }]
  }
};
