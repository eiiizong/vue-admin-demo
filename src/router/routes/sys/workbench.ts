import type { AppRouteRecordRaw } from '@/router/types'

import { LAYOUT } from '@/router/constant'

const workbenchRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Home',
  component: LAYOUT,
  redirect: '/workbench',
  meta: {},
  children: [
    {
      path: '/workbench',
      name: 'Workbench',
      component: () => import('@/views/sys/workbench/index.vue'),
      meta: {
        title: '工作台'
      }
    }
  ]
}

export default workbenchRoute
