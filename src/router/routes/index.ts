import type { AppRouteRecordRaw } from '@/router/types'

import { LAYOUT } from '@/router/constant'

import { demoRoute } from './demo'
import { sysRoute } from './sys'
// import { basicRoute } from './basic'

const routes: AppRouteRecordRaw[] = []
const mainRoutes: AppRouteRecordRaw[] = [demoRoute, sysRoute]

/**
 * 自动导入全部静态路由，无需再手动引入！匹配 src/router/routes/project 目录（任何嵌套级别）中具有 .ts 扩展名的所有文件
 * 如何匹配所有文件请看：https://github.com/mrmlnc/fast-glob#basic-syntax
 * 如何排除文件请看：https://cn.vitejs.dev/guide/features.html#negative-patterns
 */
const projectRoutes: Record<string, any> = import.meta.glob(['./project/**/*.ts'], {
  eager: true
})

Object.keys(projectRoutes).forEach((key) => {
  const route = projectRoutes[key].default
  if (route) {
    routes.push(route)
  }
})

const layoutDefaultRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Home',
  component: LAYOUT,
  redirect: '/workbench',
  meta: {},
  children: mainRoutes
}

routes.push(layoutDefaultRoute)

console.log(routes, 99878)

export default routes
