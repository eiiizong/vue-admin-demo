import type { AppRouteRecordRaw } from '@/router/types'

const errorRoute: AppRouteRecordRaw = {
  path: 'error',
  name: 'SysError',
  meta: {
    title: '系统错误'
  },
  children: [
    {
      path: '403',
      name: 'SysError403',
      component: () => import('@/views/sys/error/403.vue'),
      meta: {
        title: '403'
      }
    },
    {
      path: '404',
      name: 'SysError404',
      component: () => import('@/views/sys/error/404.vue'),
      meta: {
        title: '404'
      }
    },
    {
      path: '500',
      name: 'SysError500',
      component: () => import('@/views/sys/error/500.vue'),
      meta: {
        title: '500'
      }
    }
  ]
}

export default errorRoute
