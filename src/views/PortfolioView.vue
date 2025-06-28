<template>
  <div class="@container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
    <div class="justify-center text-gray-500 pb-4">
      <div class="flex items-center gap-4">
        <img
          class="h-24 w-24 rounded-full shadow-lg shadow-slate-500/50 dark:shadow-slate-600/50 mb-4 ring-1 ring-slate-300 dark:ring-slate-700 dark:ring-slate-400"
          :src="profileImage"
        />
        <div class="flex flex-col">
          <strong class="font-medium text-gray-900 dark:text-gray-200">Kamil</strong
          ><span class="font-medium text-gray-500 dark:text-gray-400"
            >Senior Frontend Developer</span
          >
        </div>
      </div>
    </div>

    <h1 class="text-3xl font-bold text-slate-700 dark:text-gray-200 pb-2">Hi, I'm Kamil</h1>
    <p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
      I'm a frontend developer with 10+ years of experience, specializing in Vue.js, Nuxt.js, and
      building responsive, user-friendly websites. With a UI/UX design background, I focus on clean,
      intuitive interfaces using tools like Tailwind, Vite, and Pinia. I've also worked with AWS,
      Azure, React, and AngularJS, and enjoy writing clean code and collaborating with teams
    </p>

    <div class="p-5 bg-gray-100 dark:bg-gray-800 mb-8 text-wrap">
      <div class="md:flex md:items-center gap-4 mb-2">
        <InformationCircleIcon
          class="h-6 w-6 text-slate-600 hover:text-slate-700 dark:text-slate-300 dark:hover:text-slate-200 mb-2 md:mb-0"
          aria-hidden="true"
        />
        <div>
          <h2 class="text-xl font-semibold text-slate-700 dark:text-gray-200">Featured works</h2>

          <p class="text-gray-500 dark:text-gray-400">
            Below are selected freelance and professional projects. Some details have been changed
            for confidentiality, but they show the kind of work I do
          </p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <PortfolioCards v-for="(card, cardIndex) in portfolioData" :key="cardIndex" :item="card" />
    </div>
  </div>
  <PortfolioDetail />
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { usePortfolioStore } from '@/stores/portfolioStore';
import PortfolioCards from '@/components/Portfolio/PortfolioCards.vue';
import PortfolioDetail from '@/components/Portfolio/PortfolioDetail.vue';
import { useProfileImage } from '@/composables/useProfileImage.ts';
import { InformationCircleIcon } from '@heroicons/vue/24/outline';

const { profileImage } = useProfileImage();
// Fetch portfolio data on mounted
const portfolioStore = usePortfolioStore();
const { portfolioData } = storeToRefs(portfolioStore);

onMounted(async () => {
  await portfolioStore.fetchPortfolioData();
});
</script>
