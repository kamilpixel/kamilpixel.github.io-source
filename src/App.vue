<template>
  <div class="flex flex-col min-h-screen bg-white dark:bg-gray-900">
    <main class="flex-1">
      <TheHeader />
      <RouterView />
    </main>
    <TheFooter />
    <p class="hidden">v2026-03-14-1023</p>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>

<style scoped></style>
