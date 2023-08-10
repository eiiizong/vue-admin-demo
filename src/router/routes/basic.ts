import type { AppRouteRecordRaw } from '@/router/types'

import { LAYOUT, PAGE_NOT_FOUND_NAME, EXCEPTION_COMPONENT } from '@/router/constant'

// 404
const PAGE_NOT_FOUND_ROUTE: AppRouteRecordRaw = {
  path: '/:path(.*)*',
  name: PAGE_NOT_FOUND_NAME,
  component: LAYOUT,
  meta: {
    title: 'ErrorPage',
    hideBreadcrumb: true,
    hideMenu: true
  },
  children: [
    {
      path: '/:path(.*)*',
      name: PAGE_NOT_FOUND_NAME,
      component: EXCEPTION_COMPONENT,
      meta: {
        title: 'ErrorPage',
        hideBreadcrumb: true,
        hideMenu: true
      }
    }
  ]
}

const basicRoute = [PAGE_NOT_FOUND_ROUTE]

export { basicRoute }
