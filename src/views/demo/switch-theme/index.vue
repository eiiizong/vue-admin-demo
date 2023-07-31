<template>
  <div class="switch-theme flex-c flex-col">
    <el-button type="primary">primary</el-button>

    <div>
      当前颜色：{{ color }}
      <el-color-picker v-model="color" />
    </div>
  </div>
</template>

<script setup lang="ts">
const color = ref('12')
</script>
