import 'virtual:windi.css'

import { createApp } from 'vue'
import { setupStore } from '@/stores'

import App from './App.vue'
import router from './router'

async function bootstrap() {
  const app = createApp(App)

  // 配置 store
  setupStore(app)

  app.use(router)

  app.mount('#app')
}

bootstrap()
