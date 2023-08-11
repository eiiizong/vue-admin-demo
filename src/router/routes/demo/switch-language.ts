import type { AppRouteRecordRaw } from '@/router/types'

const switchLanguageRoute: AppRouteRecordRaw = {
  path: 'switch-language',
  name: 'DemoSwitchlanguage',
  component: () => import('@/views/demo/switch-language/index.vue'),
  meta: {
    title: '切换语言'
  }
}

export { switchLanguageRoute }
