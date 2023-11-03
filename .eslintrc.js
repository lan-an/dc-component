/*
 * @Date: 2023-10-20 11:36:54
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-10-20 13:34:14
 * @FilePath: \dc-component\.eslintrc.js
 */
/* eslint-env node */
/* eslint-disable no-new */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    es2022: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'vue/comment-directive': 'off',
    'no-var': 'error',
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index'],
      },
    ],
  },
  globals: {
    process: true,
    __dirname: true,
  },
};
