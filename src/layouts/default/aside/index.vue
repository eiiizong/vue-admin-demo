<template>
  <el-aside :style="layoutSiderStyle" :class="prefixCls">
    <LayoutLogo></LayoutLogo>
    <LayoutMenu class="flex-1"></LayoutMenu>
  </el-aside>
</template>

<script lang="ts" setup>
import LayoutLogo from '@/layouts/default/logo/index.vue'
import LayoutMenu from '@/layouts/default/menu/index.vue'

const prefixCls = ref('yh-layout-default-aside')

const layoutSiderStyle = computed(() => {
  let str = ''
  str += `width: ${'300px'}`
  return str
})
</script>

<style lang="scss" scoped>
$prefix-cls: $namespace + '-layout-default-aside';

.#{$prefix-cls} {
  background-image: linear-gradient(180deg, #0f1b53 0%, #364aa8 100%);
}
</style>
