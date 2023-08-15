<template>
  <el-config-provider v-bind="elConfigProviderAttr">
    <AppProvider>
      <router-view></router-view>
    </AppProvider>
  </el-config-provider>
</template>

<script lang="ts" setup>
import { AppProvider } from '@/components/Application'

import { ElConfigProvider } from 'element-plus'

import { useElConfigProviderAttr } from '@/hooks'

const elConfigProviderAttr = useElConfigProviderAttr()
</script>
