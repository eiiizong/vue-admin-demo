<template>
  <div class="layout-sider h-full flex flex-col" :style="layoutSiderStyle">
    <LayoutLogo></LayoutLogo>
    <LayoutMenu class="flex-1"></LayoutMenu>
  </div>
</template>

<script lang="ts" setup>
import LayoutLogo from '@/layouts/default/logo/index.vue'
import LayoutMenu from '@/layouts/default/menu/index.vue'

const layoutSiderStyle = computed(() => {
  let str = ''
  str += `width: ${'300px'}`
  return str
})
</script>

<style lang="scss" scoped>
.layout-sider {
  background-image: linear-gradient(180deg, #0f1b53 0%, #364aa8 100%);
}
</style>
