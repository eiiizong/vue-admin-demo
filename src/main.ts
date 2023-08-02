import 'normalize.css/normalize.css'
import '@/assets/styles/css/reset.css'
import 'virtual:windi.css'
import '@/assets/styles/css/tailwind.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/assets/styles/css/dark.css'

import { createApp } from 'vue'

import { setupStore } from '@/stores'
import { setupRouter } from '@/router'

import App from './App.vue'

async function bootstrap() {
  const app = createApp(App)

  // 配置 store
  setupStore(app)

  setupRouter(app)

  app.mount('#app')
}

bootstrap()
