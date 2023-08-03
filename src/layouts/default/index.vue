<template>
  <div class="layout full flex">
    <LayoutSider></LayoutSider>
    <main class="main-wrapper full flex flex-col">
      <LayoutHeader></LayoutHeader>
      <LayoutTabs></LayoutTabs>
      <LayoutContent></LayoutContent>
      <LayoutFooter></LayoutFooter>
    </main>
  </div>
</template>

<script lang="ts" setup>
import LayoutContent from '@/layouts/default/content/index.vue'
import LayoutFooter from '@/layouts/default/footer/index.vue'
import LayoutHeader from '@/layouts/default/header/index.vue'
import LayoutSider from '@/layouts/default/sider/index.vue'
import LayoutTabs from '@/layouts/default/tabs/index.vue'
</script>

<style lang="scss" scoped>
.layout {
  .main-wrapper {
    background-color: var(--el-bg-color-page);
  }
}
</style>
