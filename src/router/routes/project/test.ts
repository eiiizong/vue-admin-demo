import type { AppRouteRecordRaw } from '@/router/types'

const testRoute: AppRouteRecordRaw = {
  path: 'test',
  name: 'ProjectTest',
  component: () => import('@/views/project/test/index.vue'),
  meta: {
    title: '测试'
  }
}

export default testRoute
