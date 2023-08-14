import type { AppRouteRecordRaw } from '@/router/types'

const menuRoute: AppRouteRecordRaw = {
  path: 'menu',
  name: 'SysMenu',
  component: () => import('@/views/sys/menu/index.vue'),
  meta: {
    title: '菜单管理'
  }
}

export default menuRoute
