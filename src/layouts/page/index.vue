<template>
  <RouterView>
    <template #default="{ Component, route }">
      <transition name="fade" mode="out-in" appear>
        <keep-alive v-if="openCache">
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
        <div v-else>
          <component :is="Component" :key="route.fullPath" />
        </div>
      </transition>
    </template>
  </RouterView>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const openCache = ref(false)
</script>
