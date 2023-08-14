import type { AppRouteRecordRaw } from '@/router/types'

import { LAYOUT, PROJECT_PATH, WORKBENCH_PATH } from '@/router/constant'

import { loginRoute } from '@/router/routes/sys/login'
import { workbenchRoute } from '@/router/routes/sys/workbench'

/**
 * 获取 project/demo/sys 目录下所有路由
 */
const getRoute = (type: 'demo' | 'project' | 'sys') => {
  const _routes: AppRouteRecordRaw[] = []
  /**
   * 自动导入全部静态路由，无需再手动引入！匹配 src/router/routes/project 目录（任何嵌套级别）中具有 .ts 扩展名的所有文件
   * 如何匹配所有文件请看：https://github.com/mrmlnc/fast-glob#basic-syntax
   * 如何排除文件请看：https://cn.vitejs.dev/guide/features.html#negative-patterns
   */
  let modules: Record<string, any> = {}

  if (type === 'demo') {
    modules = import.meta.glob(['./project/**/*.ts'], {
      eager: true
    })
  }

  if (type === 'project') {
    modules = import.meta.glob(['./project/**/*.ts'], {
      eager: true
    })
  }

  if (type === 'sys') {
    modules = import.meta.glob(['./sys/**/*.ts', '!./sys/**/login.ts', '!./sys/**/workbench.ts'], {
      eager: true
    })
  }

  Object.keys(modules).forEach((key) => {
    const route = modules[key].default
    if (route) {
      _routes.push(route)
    }
  })
  return _routes
}

/**
 * 项目相关路由
 */
const projectRoute: AppRouteRecordRaw = {
  path: PROJECT_PATH,
  name: 'PROJECT',
  redirect: WORKBENCH_PATH,
  meta: {
    name: ''
  },
  children: getRoute('project')
}

/**
 * demo 路由
 */
const demoRoute: AppRouteRecordRaw = {
  path: '/demo',
  name: 'Demo',
  meta: {
    name: '示例'
  },
  children: getRoute('demo')
}

/**
 * 系统路由
 */
const sysRoute: AppRouteRecordRaw = {
  path: '/sys',
  name: 'Sys',
  meta: {
    name: '系统管理'
  },
  children: getRoute('sys')
}

/**
 * 使用默认布局的路由
 */
const layoutRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Workbench',
  component: LAYOUT,
  redirect: WORKBENCH_PATH,
  meta: {
    name: '工作台'
  },
  children: [projectRoute, demoRoute, sysRoute, workbenchRoute]
}

const routes = [layoutRoute, loginRoute]

console.log(routes, 99878)

export default routes
