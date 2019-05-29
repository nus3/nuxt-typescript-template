module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    '@typescript-eslint'
  ],
  // add your custom rules here
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/indent': ["error", 2],
  }
}
