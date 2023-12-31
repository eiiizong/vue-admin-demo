import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { configEslintPlugin } from './eslint'
import { configHtmlPlugin } from './html'
import { configSvgLoaderPlugin } from './svg-loader'
import { configWindiCSSPluginPlugin } from './windicss'

import type { PluginOption } from 'vite'

const createVitePlugins = (viteEnv: ViteEnv, isBuild: boolean) => {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // have to
    vue(),
    // have to
    vueJsx()
  ]

  // unplugin-auto-import/vite
  vitePlugins.push(
    AutoImport({
      imports: ['vue'],
      resolvers: [ElementPlusResolver()]
    })
  )

  // unplugin-vue-components/vite
  vitePlugins.push(
    Components({
      resolvers: [ElementPlusResolver()]
    })
  )

  // vite-plugin-eslint
  vitePlugins.push(configEslintPlugin())

  // vite-plugin-html
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild))

  // vite-svg-loader
  vitePlugins.push(configSvgLoaderPlugin())

  // vite-plugin-windicss
  vitePlugins.push(configWindiCSSPluginPlugin())

  // The following plugins only work in the production environment
  if (isBuild) {
    //
  }

  return vitePlugins
}

export { createVitePlugins }
