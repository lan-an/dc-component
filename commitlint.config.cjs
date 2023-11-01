/*
 * @Date: 2023-10-20 13:44:36
 * @Auth: 463997479@qq.com
 * @LastEditors: 463997479@qq.com
 * @LastEditTime: 2023-10-20 14:06:14
 * @FilePath: \dc-component\commitlint.config.cjs
 */
// eslint-disable-next-line no-undef
module.exports = {
  extends: ['@commitlint/config-conventional'],
  // 校验规则
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新增功能
        'fix', // 修复缺陷
        'docs', // 文档变更
        'style', // 代码格式（不影响功能，例如空格、分号等格式修正）
        'refactor', // 代码重构（不包括 bug 修复、功能新增）
        'perf', // 性能优化
        'test', // 添加疏漏测试或已有测试改动
        'build', // 构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）
        'ci', // 修改 CI 配置、脚本
        'revert', // 回滚 commit
        'chore' // 对构建过程或辅助工具和库的更改（不影响源文件、测试用例）
      ]
    ],

    'subject-case': [0]
  }
}

