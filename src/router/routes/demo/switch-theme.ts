import type { AppRouteRecordRaw } from '@/router/types'

const switchThemeRoute: AppRouteRecordRaw = {
  path: 'switch-theme',
  name: 'SwitchTheme',
  component: () => import('@/views/demo/switch-theme/index.vue'),
  meta: {
    title: '切换主题'
  }
}

export { switchThemeRoute }
