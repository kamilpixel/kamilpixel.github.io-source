<template>

  <button class="text-left" @click="openProject()">
    <div class="ring-1 ring-slate-200 dark:ring-slate-700 rounded-xl overflow-hidden relative w-full h-[486px] shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <!-- Screenshot -->
      <div class="absolute inset-0 w-full h-full transition-transform duration-300 transform hover:scale-105">
        <img
          class="w-full h-full object-cover"
          src="https://picsum.photos/1080/1080"
          alt="Work from home scene"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>  
      
      <!-- Content -->
      <div class="absolute bottom-0 p-4 text-white">
        <div class="flex items-center text-sm mb-1 space-x-2">
          <span>UI/UX Design</span>
        </div>
        <h2 class="text-lg font-semibold leading-tight">
          Libero quisquam voluptatibus nam iusto qui dolor
        </h2>
      </div>
    </div>
  </button>

  <div
    class="hidden bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 ring-1 ring-slate-200 dark:ring-slate-700"
  >
    <!-- Cards header -->
    <div class="border-b border-gray-200 dark:border-gray-700">
      <h3 class="text-lg font-semibold p-2 text-slate-600">Lorem ipsum dolor sit imet</h3>
    </div>

    <!-- Project thumbnail -->
    <div class="relative">
      <img
        src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
        alt="Project Thumbnail"
        class="cursor-pointer w-full h-48 object-cover"
        @click="openProject()"
      />
    </div>

    <!-- Cards footer -->
    <div
      class="flex items-center justify-between p-4 border-t border-gray-200 dark:border-gray-700"
    >
      <!-- Badge category -->
      <span
        class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset"
      >
        UI/UX Design
      </span>
      <!-- Button view project -->
      <button
        @click="openProject()"
        class="cursor-pointer rounded-md border border-purple-200 px-4 py-1 text-sm font-semibold text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700"
      >
        View Project
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePortfolioStore } from '@/stores/portfolioStore'
const portfolioStore = usePortfolioStore()

const openProject = () => {
  portfolioStore.toggleModal()
}
</script>
