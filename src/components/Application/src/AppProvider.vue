<template>
  <slot></slot>
</template>

<script lang="ts" setup>
import { prefixCls as _prefixCls } from '@/settings/designSetting'

defineOptions({
  name: 'AppProvider'
})

defineProps({
  /**
   * 全局 class 类名前缀
   */
  prefixCls: {
    type: String,
    default: _prefixCls
  }
})
</script>
