import 'normalize.css/normalize.css'
import '@/assets/styles/css/reset.css'
import 'virtual:windi.css'
import '@/assets/styles/css/tailwind.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/assets/styles/css/dark.css'

import { createApp } from 'vue'

import { setupStore } from '@/stores'
import { setupRouter } from '@/router'
import { registerGlobComp } from '@/components'
import { setupGlobDirectives } from '@/directives'

import App from './App.vue'

const setupAppConfig = async () => {}

async function bootstrap() {
  const app = createApp(App)

  setupStore(app)

  setupRouter(app)

  registerGlobComp(app)

  setupGlobDirectives(app)

  await setupAppConfig()

  app.mount('#app')
}

bootstrap()
