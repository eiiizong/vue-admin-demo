import type { AppRouteRecordRaw } from '@/router/types'

const demoRoute: AppRouteRecordRaw = {
  path: '/demo',
  name: 'Demo',
  meta: {
    title: '示例'
  },
  children: [
    {
      path: 'switch-language',
      name: 'Switchlanguage',
      component: () => import('@/views/demo/switch-language/index.vue'),
      meta: {
        title: '切换语言'
      }
    },
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
