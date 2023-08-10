import type { AppRouteRecordRaw } from '@/router/types'

import { switchLanguageRoute } from './switch-language'
import { switchThemeRoute } from './switch-theme'

const demoRoute: AppRouteRecordRaw = {
  path: '/demo',
  name: 'Demo',
  meta: {
    title: '示例'
  },
  children: [switchLanguageRoute, switchThemeRoute]
}

export { demoRoute }
