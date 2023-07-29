import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import WindiCSS from 'vite-plugin-windicss'

import type { PluginOption } from 'vite'

const createVitePlugins = (viteEnv: ViteEnv, isBuild: boolean) => {
  console.log('viteEnv0', viteEnv)

  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // have to
    vue(),
    // have to
    vueJsx()
  ]

  // unplugin-auto-import/vite
  vitePlugins.push(
    AutoImport({
      resolvers: [ElementPlusResolver()]
    })
  )

  // unplugin-vue-components/vite
  vitePlugins.push(
    Components({
      resolvers: [ElementPlusResolver()]
    })
  )

  // vite-plugin-windicss
  vitePlugins.push(WindiCSS())

  // The following plugins only work in the production environment
  if (isBuild) {
    //
  }

  return vitePlugins
}

export { createVitePlugins }
