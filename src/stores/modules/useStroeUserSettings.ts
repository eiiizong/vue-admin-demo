import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const useStroeUserSettings = defineStore('stroeUserSettings', () => {
  const userSettings = ref({})

  const getUserSettings = computed(() => userSettings.value)

  function updateUserSettings(data: any) {
    userSettings.value = { ...userSettings.value, ...data }
  }

  return { userSettings, getUserSettings, updateUserSettings }
})

export { useStroeUserSettings }
