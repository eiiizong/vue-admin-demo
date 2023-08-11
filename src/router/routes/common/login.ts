import type { AppRouteRecordRaw } from '@/router/types'

const loginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/sys/login/index.vue'),
  meta: {
    title: '登录'
  }
}

export { loginRoute }
