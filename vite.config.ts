import { fileURLToPath, URL } from 'node:url'

import { loadEnv } from 'vite'

import { wrapperEnv } from './build/utils'
import { createVitePlugins } from './build/vite/plugins'

import type { UserConfigExport, ConfigEnv } from 'vite'

const __APP_INFO__ = {
  pkg: {},
  lastBuildTime: ''
}

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const root = process.cwd()

  const env = loadEnv(mode, root)

  // 将字符串转化布尔类型
  const viteEnv = wrapperEnv(env)

  // 是否为生产环境
  const isBuild = command === 'build'

  return {
    plugins: createVitePlugins(viteEnv, isBuild),
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
