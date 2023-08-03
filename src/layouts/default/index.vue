<template>
  <div class="layout full flex flex-col">
    <LayoutHeader></LayoutHeader>
    <div class="h-full flex">
      <LayoutMenu></LayoutMenu>
      <div class="full flex flex-col">
        <LayoutTabs></LayoutTabs>
        <div class="h-full">
          <LayoutContent></LayoutContent>
        </div>
        <LayoutFooter></LayoutFooter>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LayoutContent from '@/layouts/default/content/index.vue'
import LayoutFooter from '@/layouts/default/footer/index.vue'
import LayoutHeader from '@/layouts/default/header/index.vue'
import LayoutMenu from '@/layouts/default/menu/index.vue'
import LayoutTabs from '@/layouts/default/tabs/index.vue'
</script>

<style lang="scss" scoped>
.workbench {
  @apply bg-yellow-200;
}
</style>
