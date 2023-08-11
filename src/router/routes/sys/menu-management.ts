import type { AppRouteRecordRaw } from '@/router/types'

const menuManagmentRoute: AppRouteRecordRaw = {
  path: 'menu-management',
  name: 'SysMenuManagment',
  component: () => import('@/views/sys/menu-management/index.vue'),
  meta: {
    title: '菜单管理'
  }
}

export { menuManagmentRoute }
