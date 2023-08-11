import { defineStore } from 'pinia'

import type { StroeUserSettings } from '@/stores/types'

/**
 * 用户设置信息 store
 */
const useStroeUserSettings = defineStore({
  id: 'stroeUserSettings',
  state: (): StroeUserSettings => {
    return {
      menu: {
        mode: 'vertical',
        width: '260px',
        isCollapse: false
      },
      theme: {
        color: '#f00',
        isDark: false
      },
      language: 'zh-cn',
      showLogo: true,
      showTabs: true,
      showBreadcrumb: true
    }
  },
  getters: {
    getMenu(): StroeUserSettings['menu'] {
      return this.menu
    },
    getTheme(): StroeUserSettings['theme'] {
      return this.theme
    },
    getLanguage(): StroeUserSettings['language'] {
      return this.language
    }
  },
  actions: {},
  persist: true
})

export { useStroeUserSettings }
