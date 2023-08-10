import type { App } from 'vue'

import { ElLoading } from 'element-plus'

/**
 * 注册全局组件
 */
const registerGlobComp = (app: App) => {
  app.use(ElLoading)
}

export { registerGlobComp }
