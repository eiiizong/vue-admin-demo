import { fileURLToPath, URL } from 'node:url'
import dayjs from 'dayjs'
import pkg from './package.json'
import { loadEnv } from 'vite'

import { wrapperEnv } from './build/utils'
import { createVitePlugins } from './build/vite/plugins'
import { createProxy } from './build/vite/proxy'
import { OUTPUT_DIR } from './build/constant'

import type { UserConfigExport, ConfigEnv } from 'vite'

const { dependencies, devDependencies, name, version } = pkg

const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
}

/** 路径查找 */
const pathResolve = (dir: string): string => {
  return fileURLToPath(new URL(dir, import.meta.url))
}

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const root = process.cwd()

  const env = loadEnv(mode, root)

  // 将字符串转化布尔类型
  const viteEnv = wrapperEnv(env)

  const { VITE_PORT, VITE_DROP_CONSOLE, VITE_PROXY, VITE_PUBLIC_PATH } = viteEnv

  // 是否为生产环境
  const isBuild = command === 'build'

  return {
    base: VITE_PUBLIC_PATH,
    plugins: createVitePlugins(viteEnv, isBuild),
    resolve: {
      alias: {
        '@': pathResolve('./src')
      }
    },
    server: {
      https: isBuild,
      host: true,
      port: VITE_PORT,
      proxy: createProxy(VITE_PROXY)
    },
    build: {
      // 指定输出路径
      outDir: OUTPUT_DIR,
      // 启用/禁用 gzip 压缩大小报告。压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能。
      reportCompressedSize: false,
      // 规定触发警告的 chunk 大小。（以 kbs 为单位）
      chunkSizeWarningLimit: 4000,
      // 构建后是否生成 source map 文件
      sourcemap: false,
      // 自定义底层的 Rollup 打包配置。
      rollupOptions: {
        input: {
          index: pathResolve('index.html')
        },
        // 静态资源分类打包
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
        }
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '$namespace:yh;'
        }
      }
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
