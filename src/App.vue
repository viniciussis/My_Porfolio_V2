<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopBar from './components/TopBar.vue';
import BottomBar from '@/components/BottomBar.vue';
</script>

<template>
  <div class="appContainer">
    <TopBar />
    <RouterView />
    <BottomBar />
  </div>
</template>

<style scoped>
.appContainer {
  grid-template-rows: auto 1fr auto;
  align-items: center;
}
</style>
