<template>
  <el-container :class="[prefixCls]">
    <LayoutAside></LayoutAside>
    <el-container :class="`${prefixCls}-content`">
      <LayoutHeader></LayoutHeader>
      <LayoutTabs></LayoutTabs>
      <LayoutContent></LayoutContent>
      <LayoutFooter></LayoutFooter>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import LayoutContent from '@/layouts/default/content/index.vue'
import LayoutFooter from '@/layouts/default/footer/index.vue'
import LayoutHeader from '@/layouts/default/header/index.vue'
import LayoutAside from '@/layouts/default/aside/index.vue'
import LayoutTabs from '@/layouts/default/tabs/index.vue'

const prefixCls = ref('yh-layout-default')
</script>

<style lang="scss" scoped>
$prefix-cls: $namespace + '-layout-default';
$prefix-cls-main: $namespace + '-layout-default';

.#{$prefix-cls} {
  @apply w-full h-full overflow-hidden;
  min-height: 100%;
  background-color: var(--el-bg-color-page);
  &-content {
    @apply flex flex-col;
  }
}
</style>
