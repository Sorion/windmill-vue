<template>
  <div id="app-container"><slot></slot></div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';

export default defineComponent({
  name: 'WApp',
  props: {
    dark: { type: Boolean, default: false },
    usePreferences: { type: Boolean, default: false },
  },
  setup(props) {
    const setMode = (isDark: boolean) => {
      if (isDark) {
        document.documentElement.className = '';
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.className = '';
        document.documentElement.classList.add();
      }
    };

    watch(
      () => props.dark,
      (value) => {
        setMode(value);
      }
    );
  },
});
</script>

<style lang="postcss" scoped>
#app-container {
  @apply m-0 p-0 bg-slate-100 dark:bg-gray-900;
}
</style>
