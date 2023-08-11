// export const REDIRECT_NAME = 'Redirect'

export const PARENT_LAYOUT_NAME = 'ParentLayout'

export const PAGE_NOT_FOUND_NAME = 'PageNotFound'
/**
 * 项目路由
 */
export const PROJECT_PATH = '/project'
/**
 * 工作台路由
 */
export const WORKBENCH_PATH = '/workbench'

export const EXCEPTION_COMPONENT = () => import('@/views/sys/exception/index.vue')

/**
 * @description: default layout
 */
export const LAYOUT = () => import('@/layouts/default/index.vue')

/**
 * @description: parent-layout
 */
// export const getParentLayout = (_name?: string) => {
//   return () =>
//     new Promise((resolve) => {
//       resolve({
//         name: _name || PARENT_LAYOUT_NAME
//       })
//     })
// }
