import { defineStore } from 'pinia'

import type { RouteLocationNormalized } from 'vue-router'

export interface MultipleTabState {
  cacheTabList: Set<string>
  tabList: RouteLocationNormalized[]
  lastDragEndIndex: number
}

/**
 * 标签栏 store
 */
const useStoreMultipleTab = defineStore({
  id: 'storeMultipleTab',
  state: (): MultipleTabState => {
    return {
      // Tabs that need to be cached
      cacheTabList: new Set(),
      // multiple tab list
      tabList: [],
      // Index of the last moved tab
      lastDragEndIndex: 0
    }
  },
  getters: {},
  actions: {},
  persist: true
})

export { useStoreMultipleTab }
