<template>
  <div class="layout-sider h-full flex flex-col w-[300px]">
    <LayoutLogo></LayoutLogo>
    <LayoutMenu class="flex-1"></LayoutMenu>
  </div>
</template>

<script lang="ts" setup>
import LayoutLogo from '@/layouts/default/logo/index.vue'
import LayoutMenu from '@/layouts/default/menu/index.vue'
</script>

<style lang="scss" scoped>
.layout-sider {
  //
}
</style>
