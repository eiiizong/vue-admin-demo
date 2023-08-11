import type { AppRouteRecordRaw } from '@/router/types'

import { loginRoute } from './login'
import { workbenchRoute } from './workbench'

const childrenRoutes = [loginRoute, workbenchRoute]

const sysRoute: AppRouteRecordRaw = {
  path: '/sys',
  name: 'Sys',
  meta: {
    title: '示例'
  },
  children: childrenRoutes
}

export { sysRoute }
