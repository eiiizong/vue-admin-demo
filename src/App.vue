<template>
  <el-config-provider>
    <router-view />
  </el-config-provider>
</template>

<script lang="ts" setup>
import { ElConfigProvider } from 'element-plus'
// import { computed } from 'vue'
// import en from 'element-plus/lib/locale/lang/en'
// import { ReDialog } from '@/components/ReDialog'
// import zhCn from 'element-plus/lib/locale/lang/zh-cn'

// const currentLocale = computed(() => {
//   return zhCn
// })
</script>
