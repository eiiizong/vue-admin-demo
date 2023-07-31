<template>
  <el-config-provider v-bind="elConfigProviderAttr">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts" setup>
import { ElConfigProvider } from 'element-plus'
import { useElConfigProviderAttr } from '@/hooks'

const elConfigProviderAttr = useElConfigProviderAttr()
</script>
