import type { AppRouteRecordRaw } from '@/router/types'

import { LAYOUT, PROJECT_PATH, WORKBENCH_PATH } from '@/router/constant'

// import { demoRoute } from './demo'
// import { sysRoute } from './sys'
// import { basicRoute } from './basic'

/**
 * 获取 project 目录下所有路由
 */
const getProjectRoute = () => {
  const _routes: AppRouteRecordRaw[] = []

  /**
   * 自动导入全部静态路由，无需再手动引入！匹配 src/router/routes/project 目录（任何嵌套级别）中具有 .ts 扩展名的所有文件
   * 如何匹配所有文件请看：https://github.com/mrmlnc/fast-glob#basic-syntax
   * 如何排除文件请看：https://cn.vitejs.dev/guide/features.html#negative-patterns
   */
  const modules: Record<string, any> = import.meta.glob(['./project/**/*.ts'], {
    eager: true
  })

  Object.keys(modules).forEach((key) => {
    const route = modules[key].default
    if (route) {
      _routes.push(route)
    }
  })

  return _routes
}

/**
 * 获取 project 目录下所有路由
 */
const getDemoRoute = () => {
  const _routes: AppRouteRecordRaw[] = []

  /**
   * 自动导入全部静态路由，无需再手动引入！匹配 src/router/routes/demo 目录（任何嵌套级别）中具有 .ts 扩展名的所有文件
   * 如何匹配所有文件请看：https://github.com/mrmlnc/fast-glob#basic-syntax
   * 如何排除文件请看：https://cn.vitejs.dev/guide/features.html#negative-patterns
   */
  const modules: Record<string, any> = import.meta.glob(['./demo/**/*.ts'], {
    eager: true
  })

  Object.keys(modules).forEach((key) => {
    const route = modules[key].default
    if (route) {
      _routes.push(route)
    }
  })

  return _routes
}

/**
 * 获取 project 目录下所有路由
 */
const getSysRoute = () => {
  const _routes: AppRouteRecordRaw[] = []

  /**
   * 自动导入全部静态路由，无需再手动引入！匹配 src/router/routes/demo 目录（任何嵌套级别）中具有 .ts 扩展名的所有文件
   * 如何匹配所有文件请看：https://github.com/mrmlnc/fast-glob#basic-syntax
   * 如何排除文件请看：https://cn.vitejs.dev/guide/features.html#negative-patterns
   */
  const modules: Record<string, any> = import.meta.glob(['./sys/**/*.ts'], {
    eager: true
  })

  Object.keys(modules).forEach((key) => {
    const route = modules[key].default
    if (route) {
      _routes.push(route)
    }
  })

  return _routes
}

const projectRoute: AppRouteRecordRaw = {
  path: PROJECT_PATH,
  name: 'PROJECT',
  redirect: WORKBENCH_PATH,
  meta: {
    name: ''
  },
  children: getProjectRoute()
}

const demoRoute: AppRouteRecordRaw = {
  path: '/demo',
  name: 'Demo',
  meta: {
    name: '示例'
  },
  children: getDemoRoute()
}

const sysRoute: AppRouteRecordRaw = {
  path: '/sys',
  name: 'Sys',
  meta: {
    name: '系统管理'
  },
  children: getSysRoute()
}

const layoutRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Workbench',
  component: LAYOUT,
  redirect: WORKBENCH_PATH,
  meta: {
    name: '工作台'
  },
  children: [projectRoute, demoRoute, sysRoute]
}

const routes = [layoutRoute]

console.log(routes, 99878)

export default routes
