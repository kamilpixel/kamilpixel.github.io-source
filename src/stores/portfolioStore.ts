import { defineStore } from 'pinia'

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({ isOpenModal: false }),
  actions: {
    toggleModal() {
      this.isOpenModal = !this.isOpenModal
    },
    closeModal() {
      this.isOpenModal = false
    },
  },
})
