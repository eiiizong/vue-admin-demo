<template>
  <div class="switch-theme flex-c flex-col">
    <el-button type="primary" @click="toggleDark()">{{ isDark ? 'dark' : 'light' }}</el-button>

    <div>
      当前颜色：{{ color }}
      <el-color-picker v-model="color" @change="changeTheme" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { useElementPlusTheme } from '@/hooks'

const color = ref('#f00')

const isDark = useDark()

const toggleDark = useToggle(isDark)

const { changeTheme } = useElementPlusTheme()
</script>
