/*
 * @Date: 2023-10-19 09:53:16
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-10-30 14:11:46
 * @FilePath: \dc-component\.prettierrc.js
 */
module.exports = {
  singleQuote: true,
  printWidth: 80,
  pluginSearchDirs: false,
  trailingComma: 'all',
  arrowParens: 'avoid',
  proseWrap: 'never',
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: '*.md',
      options: {
        proseWrap: 'preserve'
      }
    }
  ]
}
