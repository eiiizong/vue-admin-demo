/**
 * ESLint plugin for vite.
 * https://github.com/gxmari007/vite-plugin-eslint
 */

/**
 * 
 *  "import": {
        "types":"./dist/index.d.ts",
        "default":"./dist/index.mjs"
      },
 * 
 */
import eslint from 'vite-plugin-eslint'

import type { PluginOption } from 'vite'

const configEslintPlugin = (): PluginOption => {
  const eslintPlugin = eslint({
    include: ['src/**/*.ts', 'src/**/*.vue', 'build/**/*']
  })

  return eslintPlugin
}

export { configEslintPlugin }
