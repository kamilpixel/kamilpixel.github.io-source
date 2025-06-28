<template>
  <div class="flex flex-col min-h-screen bg-white dark:bg-gray-900">
    <main class="flex-1">
      <TheHeader />
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>

<style scoped></style>
