import { fileURLToPath, URL } from 'node:url'
import dayjs from 'dayjs'
import pkg from './package.json'

import { loadEnv } from 'vite'

import { wrapperEnv } from './build/utils'
import { createVitePlugins } from './build/vite/plugins'
import { createProxy } from './build/vite/proxy'

import type { UserConfigExport, ConfigEnv } from 'vite'

const { dependencies, devDependencies, name, version } = pkg

const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
}

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const root = process.cwd()

  const env = loadEnv(mode, root)

  // 将字符串转化布尔类型
  const viteEnv = wrapperEnv(env)

  const { VITE_PORT, VITE_DROP_CONSOLE, VITE_PROXY } = viteEnv

  // 是否为生产环境
  const isBuild = command === 'build'

  return {
    plugins: createVitePlugins(viteEnv, isBuild),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      https: isBuild,
      host: true,
      port: VITE_PORT,
      proxy: createProxy(VITE_PROXY)
    },
    esbuild: {
      pure: VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : []
    },
    define: {
      __INTLIFY_PROD_DEVTOOLS__: false,
      __APP_INFO__: JSON.stringify(__APP_INFO__)
    }
  }
}
