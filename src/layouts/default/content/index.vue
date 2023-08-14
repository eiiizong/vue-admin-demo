<template>
  <el-main :class="prefixCls">
    <RouterView></RouterView>
  </el-main>
</template>

<script lang="ts" setup>
const prefixCls = ref('yh-layout-default-main')
</script>

<style lang="scss" scoped>
$prefix-cls: $namespace + '-layout-default-main';

.#{$prefix-cls} {
  @apply flex-1 overflow-hidden;
}
</style>
