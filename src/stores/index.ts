import { createPinia } from 'pinia'

import type { App } from 'vue'

const store = createPinia()

/**
 * 配置 store
 */
const setupStore = (app: App<Element>) => {
  app.use(store)
}

export { store, setupStore }
