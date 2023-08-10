<template>
  <div class="layout-menu">
    <el-menu
      class="custom-el-menu"
      :mode="stroeUserSettings.menu.mode"
      :collapse="stroeUserSettings.menu.isCollapse"
      ellipsis
      @open="onOpen"
      @close="onClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { useStroeUserSettings } from '@/stores/modules'

import { Location } from '@element-plus/icons-vue'

const stroeUserSettings = useStroeUserSettings()

const onOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const onClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped lang="scss">
.layout-menu {
  width: 100%;
  :deep(.custom-el-menu) {
    background-color: transparent;
    color: #fff;
    .el-menu-item,
    .el-sub-menu__title {
      color: #fff;
    }
    .el-menu {
      background-color: transparent;
    }
    &:not(.el-menu--collapse) {
      width: 100%;
    }
  }
}
</style>
