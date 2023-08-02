import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import type { StroeUserSettings } from '@/stores/types'

const useStroeUserSettings = defineStore('stroeUserSettings', () => {
  const userSettings = ref<StroeUserSettings>({
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
  })

  const getUserSettings = computed(() => userSettings.value)

  function updateUserSettings(data: StroeUserSettings) {
    userSettings.value = { ...userSettings.value, ...data }
  }

  return { userSettings, getUserSettings, updateUserSettings }
})

export { useStroeUserSettings }
