<template>
  <el-footer :class="prefixCls">
    <div class="key">技术支持：</div>
    <div class="value">四川久远银海软件股份有限公司</div>
  </el-footer>
</template>

<script lang="ts" setup>
const prefixCls = ref('yh-layout-default-footer')
</script>

<style lang="scss" scoped>
$prefix-cls: $namespace + '-layout-default-footer';

.#{$prefix-cls} {
  @apply border-0 bg-[#fff] mt-2 p-2 flex items-center justify-center;
  font-size: 1rem;
  line-height: 1.5;
}
</style>
