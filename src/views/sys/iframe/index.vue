<template>
  <div :class="prefixCls" :style="getWrapStyle">
    <iframe
      v-loading="loading"
      :src="frameSrc"
      :class="`${prefixCls}__main`"
      ref="frameRef"
      @load="hideLoading"
    ></iframe>
  </div>
</template>

<script lang="ts" setup>
import type { CSSProperties } from 'vue'

import { useDesign } from '@/hooks/web'

defineProps({
  frameSrc: {
    type: String,
    default: () => ''
  }
})

const loading = ref(true)
const frameRef = ref<HTMLFrameElement>()

const { prefixCls } = useDesign('iframe-page')

const getWrapStyle = computed((): CSSProperties => {
  return {
    height: `100%; `
  }
})

const calcHeight = () => {
  const iframe = unref(frameRef)
  if (!iframe) {
    return
  }
}

const hideLoading = () => {
  loading.value = false
  calcHeight()
}
</script>

<style lang="scss" scoped>
$prefix-cls: $namespace + '-iframe-page';

.#{$prefix-cls} {
  .ant-spin-nested-loading {
    position: relative;
    height: 100%;

    .ant-spin-container {
      width: 100%;
      height: 100%;
      padding: 10px;
    }
  }

  &__mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__main {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: @component-background;
    border: 0;
    box-sizing: border-box;
  }
}
</style>
