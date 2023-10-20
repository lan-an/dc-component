/*
 * @Date: 2023-10-20 13:47:35
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-10-20 13:47:40
 * @FilePath: \dc-component\scripts\preinstall.js
 */
// eslint-disable-next-line no-undef
if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn(
    `\u001b[33mThis repository must using pnpm as the package manager ` +
      ` for scripts to work properly.\u001b[39m\n`
  )
  // eslint-disable-next-line no-undef
  process.exit(1)
}
