import type { App } from 'vue'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const store = createPinia()

// 引入数据持久化插件
store.use(piniaPluginPersistedstate)

/**
 * 配置 store
 */
const setupStore = (app: App<Element>) => {
  app.use(store)
}

export { store, setupStore }
