<template>
  <div class="@container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
    <div class="justify-center text-gray-500 pb-4">
      <div class="flex items-center gap-4">
        <img class="h-12 w-12 rounded-full" src="https://picsum.photos/200/300" />
        <div class="flex flex-col">
          <strong class="font-medium text-gray-900 dark:text-gray-200">Kamil</strong
          ><span class="font-medium text-gray-500 dark:text-gray-400"
            >Senior Frontend Developer</span
          >
        </div>
      </div>
    </div>

    <h1 class="text-3xl font-bold text-slate-700 pb-2">Hi, I'm Kamil</h1>
    <p class="text-lg text-gray-600 mb-8">
      I'm a frontend developer with 10+ years of experience, specializing in Vue.js, Nuxt.js, and
      building responsive, user-friendly websites. With a UI/UX design background, I focus on clean,
      intuitive interfaces using tools like Tailwind, Vite, and Pinia. I've also worked with AWS,
      Azure, React, and AngularJS, and enjoy writing clean code and collaborating with teams
    </p>

    <!-- <h2 class="pb-4 font-semibold text-slate-400">Featured works</h2> -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <PortfolioCards v-for="(card, cardIndex) in portfolioData" :key="cardIndex" :item="card" />
    </div>
  </div>
  <PortfolioDetail />
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { usePortfolioStore } from '@/stores/portfolioStore'
import PortfolioCards from '@/components/Portfolio/PortfolioCards.vue'
import PortfolioDetail from '@/components/Portfolio/PortfolioDetail.vue'

// Fetch portfolio data on mounted
const portfolioStore = usePortfolioStore()
const { portfolioData } = storeToRefs(portfolioStore)

onMounted(async () => {
  await portfolioStore.fetchPortfolioData()
})
</script>
