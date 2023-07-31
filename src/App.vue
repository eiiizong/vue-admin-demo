<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts" setup>
import { ElConfigProvider } from 'element-plus'
import { useElConfigProviderAttr } from '@/hooks'

const { locale } = useElConfigProviderAttr()
</script>
