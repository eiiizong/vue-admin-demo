<template>
  <el-header :class="prefixCls"> header </el-header>
</template>

<script lang="ts" setup>
const prefixCls = ref('yh-layout-default-header')
</script>

<style lang="scss" scoped>
$prefix-cls: $namespace + '-layout-default-header';

.#{$prefix-cls} {
  @apply w-full bg-[#fff] p-2 flex items-center;
}
</style>
