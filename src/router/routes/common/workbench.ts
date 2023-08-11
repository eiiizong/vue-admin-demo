import type { AppRouteRecordRaw } from '@/router/types'

// import { LAYOUT } from '@/router/constant'

const workbenchRoute: AppRouteRecordRaw = {
  path: '/workbench',
  name: 'Workbench',
  component: () => import('@/views/sys/workbench/index.vue'),
  meta: {
    title: '工作台'
  }
}

export { workbenchRoute }
