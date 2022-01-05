<template>
  <WApp :dark="isDark">
    <router-view />
  </WApp>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useAppStore } from './store/appStore';

export default defineComponent({
  name: 'App',
  setup() {
    const appStore = useAppStore();
    const isDark = computed(() => appStore.isDark);

    return {
      isDark,
    };
  },
});
</script>

<style lang="postcss">
html,
body {
  @apply m-0 p-0;
}
</style>
