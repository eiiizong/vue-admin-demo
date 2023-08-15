<template>
  <div v-if="showFrame">
    <template v-for="frame in getFramePages" :key="frame.path">
      <FramePage
        v-if="frame.meta.frameSrc && hasRenderFrame(frame.name)"
        v-show="showIframe(frame)"
        :frameSrc="frame.meta.frameSrc"
      />
    </template>
  </div>
</template>
<script lang="ts" setup>
import FramePage from '/@/views/sys/iframe/index.vue'

// import { useFrameKeepAlive } from './useFrameKeepAlive'

defineOptions({
  name: 'FrameLayout'
})

const showFrame = computed(() => true)
</script>
