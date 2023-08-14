<template>
  <div :class="prefixCls">tabs</div>
</template>

<script lang="ts" setup>
const prefixCls = ref('yh-layout-default-tabs')
</script>

<style lang="scss" scoped>
$prefix-cls: $namespace + '-layout-default-tabs';

.#{$prefix-cls} {
  @apply w-full bg-[#fff] p-2 flex items-center border-t-1 border-blue-50;
}
</style>
