import type { Router } from 'vue-router'

import NProgress from '@/utils/progress'
/**
 *
 * @param router
 */
const setupRouterGuard = (router: Router) => {
  router.beforeEach(() => {
    NProgress.start()
  })

  router.afterEach(() => {
    NProgress.done()
  })
}

export { setupRouterGuard }
