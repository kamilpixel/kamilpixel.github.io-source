import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({ 
    isLight: true,
  }),
  actions: {
    toggleTheme() {
      this.isLight = !this.isLight
    },
  },
})
