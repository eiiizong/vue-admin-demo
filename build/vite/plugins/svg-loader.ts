/**
 * Vite plugin to load SVG files as Vue components, using SVGO for optimization.
 * https://github.com/jpkleemans/vite-svg-loader
 */

import svgLoader from 'vite-svg-loader'

import type { PluginOption } from 'vite'

const configSvgLoaderPlugin = (): PluginOption => {
  const windiCSSPlugin = svgLoader()

  return windiCSSPlugin
}

export { configSvgLoaderPlugin }
