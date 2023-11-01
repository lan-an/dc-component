/*
 * @Date: 2023-10-19 09:53:16
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-11-01 10:57:04
 * @FilePath: \dc-component\.prettierrc.js
 */
module.exports = {
  singleQuote: true,
  printWidth: 80,
  pluginSearchDirs: false,
  trailingComma: 'all',
  arrowParens: 'avoid',
  proseWrap: 'never',
  overrides: [
    {
      files: '*.md',
      options: {
        proseWrap: 'preserve',
      },
    },
  ],
};
