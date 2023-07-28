import { fileURLToPath, URL } from 'node:url'

import { loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import windiCSS from 'vite-plugin-windicss'

import { wrapperEnv } from './build/utils'

import type { UserConfigExport, ConfigEnv } from "vite";

const __APP_INFO__ = {
  pkg: {},
  lastBuildTime:''
}

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv):UserConfigExport => {

  const root = process.cwd();

  const env = loadEnv(mode, root);

  // 将字符串转化布尔类型
  const viteEnv = wrapperEnv(env)

  const isBuild = command === 'build';

  console.log(viteEnv,isBuild)


  return {
    plugins: [
      vue(),
      vueJsx(),
      windiCSS(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    define: {
      __INTLIFY_PROD_DEVTOOLS__: false,
      __APP_INFO__: JSON.stringify(__APP_INFO__)
    }
  }
}
