import type { AppRouteRecordRaw } from '@/router/types'

const workbenchRoute: AppRouteRecordRaw = {
  path: '/workbench',
  name: 'Workbench',
  component: () => import('@/views/workbench/index.vue'),
  meta: {
    title: '工作台'
  }
}

export default workbenchRoute
