/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
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
    // 不允许使用未使用的变量
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        // 当 参数 名称与正则表达式模式匹配不检查其用法的异常
        argsIgnorePattern: '^_',
        // 当 变量 名称与正则表达式模式匹配不检查其用法的异常
        varsIgnorePattern: '^_'
      }
    ],
    // 关闭要求组件名称始终为多词
    'vue/multi-word-component-names': 'off'
  }
}
