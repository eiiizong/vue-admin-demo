/**
 * ESLint plugin for vite.
 * https://github.com/windicss/vite-plugin-windicss
 */

/**
 * 
 *  "import": {
        "types":"./dist/index.d.ts",
        "default":"./dist/index.mjs"
      },
 * 
 */
import windiCSS from 'vite-plugin-windicss'

import type { PluginOption } from 'vite'

const configWindiCSSPluginPlugin = (): PluginOption => {
  const windiCSSPlugin = windiCSS()

  return windiCSSPlugin
}

export { configWindiCSSPluginPlugin }
