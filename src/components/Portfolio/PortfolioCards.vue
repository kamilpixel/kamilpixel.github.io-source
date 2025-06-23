<template>
  <button class="text-left" @click="openProject()">
    <div class="ring-1 ring-slate-200 dark:ring-slate-700 rounded-xl overflow-hidden relative w-full h-[286px] shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <!-- Screenshot -->
      <div class="absolute inset-0 w-full h-full transition-transform duration-300 transform hover:scale-105">
        <img
          class="w-full h-full object-cover"
          :src="item?.project_thumbnail"
          :alt="item?.project_title"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
      </div>  
      
      <!-- Content -->
      <div class="absolute bottom-0 p-4 text-white">
        <div class="flex items-center text-sm mb-1 space-x-2">
          <span>{{ item?.project_type }}</span>
        </div>
        <h2 class="text-lg font-semibold leading-tight">
          {{ item?.project_title }}
        </h2>
      </div>
    </div>
  </button>
</template>

<script lang="ts" setup>
import { usePortfolioStore } from '@/stores/portfolioStore'
import type { PortfolioItem } from '@/types/portfolio';

const props = defineProps<{
  item: PortfolioItem
}>()

const portfolioStore = usePortfolioStore()
const openProject = () => {
  // Set the selected portfolio item
  portfolioStore.selectedPortfolioItem = props.item
  // Toggle the modal to open
  portfolioStore.toggleModal()
}
</script>
