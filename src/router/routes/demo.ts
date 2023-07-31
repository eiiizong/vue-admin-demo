import type { AppRouteRecordRaw } from '@/router/types'

const demoRoute: AppRouteRecordRaw = {
  path: '/demo',
  name: 'Demo',
  meta: {
    title: '示例'
  },
  children: [
    {
      path: 'switch-theme',
      name: 'SwitchTheme',
      component: () => import('@/views/demo/switch-theme/index.vue'),
      meta: {
        title: '切换主题'
      }
    }
  ]
}

export default demoRoute
