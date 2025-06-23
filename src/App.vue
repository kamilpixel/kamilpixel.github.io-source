<template>
  <div class="flex flex-col min-h-screen dark:bg-gray-800" :class="{
    'dark': !themeStore.isLight,
    'bg-white': themeStore.isLight,
  }">
    <main class="flex-1">
      <!--  Page header -->
      <TheHeader />
      <RouterView />
    </main>
    <!-- Page footer -->
    <footer class="bg-gray-800 text-slate-500 py-4">
      <div class="container mx-auto text-center">
        <p>&copy; 2025 Kamilpixel - All rights reserved</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
import { useThemeStore } from '@/stores/themeStore'
const themeStore = useThemeStore()
</script>

<style scoped></style>
