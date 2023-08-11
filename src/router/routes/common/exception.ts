import type { AppRouteRecordRaw } from '@/router/types'

const exceptionRoute: AppRouteRecordRaw = {
  path: '/error',
  name: 'Login',
  component: () => import('@/views/sys/login/index.vue'),
  meta: {
    title: '登录'
  }
}

export { exceptionRoute }
