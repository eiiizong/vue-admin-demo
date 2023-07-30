import type { AppRouteRecordRaw } from '@/router/types'

const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/sys/login/index.vue'),
  meta: {
    title: '登录'
  }
}

// Basic routing without permission
// 未经许可的基本路由
const basicRoutes = [LoginRoute]

export { basicRoutes }
