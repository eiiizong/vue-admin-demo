import type { AppRouteRecordRaw } from '@/router/types'

const loginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/login/index.vue'),
  meta: {
    title: '登录'
  }
}

export default loginRoute
