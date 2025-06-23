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

    <h1 class="text-3xl font-bold text-slate-700">Hi, I'm Kamil</h1>
    <p class="text-gray-600 dark:text-gray-400 mb-8">
      I'm a frontend developer with over 10 years of experience, and I also have a background in
      UI/UX design. I mainly work with Vue.js, Nuxt.js, and build websites that look good and work
      well on all devices. I have a good eye for design and focus on creating clean, easy-to-use
      interfaces. I use tools like Tailwind, Bootstrap, Vite, Pinia, Vuex, and Vitest. I also have
      some experience with cloud tools like AWS and Azure. In the past, I've worked with React and
      AngularJS. I enjoy writing clean code, working with teams, and helping others grow.
    </p>

    <h2 class="pb-4 font-bold">Featured works</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <PortfolioCards v-for="(card, cardIndex) in [1,2,3,4,5]" :key="cardIndex" />
    </div>
  </div>
  <PortfolioDetail />
</template>

<script setup>
import PortfolioCards from '@/components/Portfolio/PortfolioCards.vue'
import PortfolioDetail from '@/components/Portfolio/PortfolioDetail.vue'
</script>
