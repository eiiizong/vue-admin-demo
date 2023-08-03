<template>
  <el-config-provider v-bind="elConfigProviderAttr">
    <LayoutDefault></LayoutDefault>
  </el-config-provider>
</template>

<script lang="ts" setup>
import LayoutDefault from '@/layouts/default/index.vue'
import { ElConfigProvider } from 'element-plus'
import { useElConfigProviderAttr } from '@/hooks'

const elConfigProviderAttr = useElConfigProviderAttr()
</script>
