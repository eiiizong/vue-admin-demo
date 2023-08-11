import type { AppRouteRecordRaw } from '@/router/types'

import { menuManagmentRoute } from './menu-management'

const children = [menuManagmentRoute]

const sysRoute: AppRouteRecordRaw = {
  path: '/sys',
  name: 'Sys',
  meta: {
    title: '示例'
  },
  children
}

export { sysRoute }
