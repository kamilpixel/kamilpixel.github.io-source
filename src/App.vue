<template>
  <!-- navigation -->
<!--   <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/example">example</RouterLink>
      </nav>
    </div>
  </header> -->
  <!--  Page header -->
  <TheHeader />
  <RouterView />
  <!-- Page footer -->
  <footer class="bg-gray-800 text-slate-500 py-4">
    <div class="container mx-auto text-center">
      <p>&copy; 2025 Kamilpixel - All rights reserved</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue';
</script>

<style scoped>

</style>
