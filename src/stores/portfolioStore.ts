import { defineStore } from 'pinia'
import axios from 'axios'
import type { PortfolioItem } from '@/types/portfolio'

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({ 
    isOpenModal: false,
    portfolioData: [] as PortfolioItem[],
    selectedPortfolioItem: null as PortfolioItem | null,
  }),
  actions: {
    toggleModal() {
      this.isOpenModal = !this.isOpenModal
    },
    closeModal() {
      this.isOpenModal = false
    },
    async fetchPortfolioData() {
      try {
        const response = await axios.get('/data/portfolio.json');
        this.portfolioData = response.data as PortfolioItem[];
      } catch (error) {
        console.error(error);
      }
    },
  },
})
