import 'normalize.css/normalize.css'
import '@/assets/styles/css/reset.css'
import 'virtual:windi.css'
import '@/assets/styles/css/tailwind.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/assets/styles/css/dark.css'

import { createApp } from 'vue'

import { setupStore } from '@/stores'
import { setupRouter, router } from '@/router'
import { setupRouterGuard } from '@/router/guard'
import { registerGlobComp } from '@/components'
import { setupI18n } from '@/locales'
import { setupGlobDirectives } from '@/directives'
import { initAppConfigStore } from '@/logics'
import { setupErrorHandle } from '@/logics/error-handle'

import App from './App.vue'

async function bootstrap() {
  const app = createApp(App)

  // 配置 store
  setupStore(app)

  // 初始化内部系统配置
  initAppConfigStore()

  // 注册全局组件
  registerGlobComp(app)

  // 多语言配置
  await setupI18n(app)

  // 配置路由
  setupRouter(app)

  // 路由守卫
  setupRouterGuard(router)

  // 注册全局指令
  setupGlobDirectives(app)

  // 配置全局错误处理
  setupErrorHandle(app)

  app.mount('#app')
}

bootstrap()
