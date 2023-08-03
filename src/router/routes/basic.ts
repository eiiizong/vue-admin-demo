import type { AppRouteRecordRaw } from '@/router/types'

const basicRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: '/workbench',
  meta: {
    title: '工作台'
  }
}

export default basicRoute
