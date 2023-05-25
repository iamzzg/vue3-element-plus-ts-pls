/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  // 使window,document,module这些变量不报错
  env: {
    es6: true,
    node: true,
    browser: true
  },
  globals: {
    __APP_INFO__: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-empty': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'vue/multi-word-component-names': [
      'off',
      {
        ignores: []
      }
    ],
    'vue/comment-directive': [
      'off',
      {
        reportUnusedDisableDirectives: true
      }
    ]
  }
}
