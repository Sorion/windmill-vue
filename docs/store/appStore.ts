import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      isDark: false,
    };
  },

  actions: {
    switchTheme() {
      this.isDark = !this.isDark;
    },
  },
});
