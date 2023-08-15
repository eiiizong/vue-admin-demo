<template>
  <slot></slot>
</template>

<script lang="ts" setup>
import { prefixCls as _prefixCls } from '@/settings/designSetting'
import { createBreakpointListen } from '@/hooks/event/useBreakpoint'
import { createAppProviderContext } from './useAppContext'

defineOptions({
  name: 'AppProvider'
})

const props = defineProps({
  /**
   * 全局 class 类名前缀
   */
  prefixCls: {
    type: String,
    default: _prefixCls
  }
})

/**
 * 是否为移动设备
 */
const isMobile = ref(false)

const { prefixCls } = toRefs(props)

// 重置store状态
const handleRestoreState = () => {
  //
}

createBreakpointListen(({ screenMap, sizeEnum, width }) => {
  console.log(screenMap, sizeEnum, width)

  const lgWidth = screenMap.get(sizeEnum.LG)
  if (lgWidth) {
    isMobile.value = width.value - 1 < lgWidth
  }
  handleRestoreState()
})

createAppProviderContext({ prefixCls, isMobile })
</script>
