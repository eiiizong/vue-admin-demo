import type { AppRouteRecordRaw } from '@/router/types'

const ExceptionRoute: AppRouteRecordRaw = {
  path: '/error',
  name: 'Login',
  component: () => import('@/views/sys/login/index.vue'),
  meta: {
    title: '登录'
  }
}

export default ExceptionRoute
