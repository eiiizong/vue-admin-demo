<template>
  <RouterView>
    <template #default="{ Component, route }">
      <transition name="fade-slide" mode="out-in" appear>
        <keep-alive v-if="openCache" :include="getCaches">
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
        <div v-else :key="route.name">
          <component :is="Component" :key="route.fullPath" />
        </div>
      </transition>
    </template>
  </RouterView>
  <!-- <FrameLayout v-if="getCanEmbedIFramePage" /> -->
</template>

<script lang="ts" setup>
const getCaches = ref([])
const openCache = ref(false)
</script>
