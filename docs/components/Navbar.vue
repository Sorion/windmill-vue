<template>
  <nav class="navbar">
    <div class="brand">
      <router-link to="/" title="Winify: Win UI components for Vue.Js"><h1>Windmill Vue</h1></router-link>
    </div>
    <div class="link-container">
      <button class="icon-button" aria-label="Toggle color mode" @click="handleToogleTheme">
        <div v-if="isDark" class="w-5 h-5">
          <SunIcon class="w-5 h-5" aria-hidden="true" />
        </div>
        <div v-else class="w-5 h-5">
          <MoonIcon class-name="w-5 h-5" aria-hidden="true" />
        </div>
      </button>
      <router-link class="link-base link-item active px-2" to="/">Home</router-link>
      <router-link class="link-base link-item active px-2" to="/documentation/get-started">Documentation</router-link>
      <a class="link-base link-item active px-2" href="https://github.com/Sorion/windmill-vue" aria-label="Github"
        ><div aria-hidden="true"><GithubIcon class="h-5 w-5" /></div>
      </a>
    </div>
  </nav>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';

import GithubIcon from './icons/GithubIcon.vue';
import { SunIcon, MoonIcon } from '@heroicons/vue/solid';
import { useAppStore } from '../store/appStore';

export default defineComponent({
  name: 'Navbar',
  components: {
    GithubIcon,
    SunIcon,
    MoonIcon,
  },
  setup() {
    const githubIcon = GithubIcon;

    const appStore = useAppStore();

    const isDark = computed(() => appStore.isDark);
    const handleToogleTheme = () => {
      appStore.switchTheme();
    };

    return {
      githubIcon,
      handleToogleTheme,
      isDark,
    };
  },
});
</script>

<style lang="postcss" scoped>
.navbar {
  @apply flex border-b bg-white border-gray-400 px-8 w-full;
  min-height: 3.75rem;
}
.brand {
  @apply self-center;
}

.link-container {
  @apply flex flex-grow justify-end items-center flex-shrink-0;
}

.link-base {
  @apply px-4 py-2 rounded-lg text-sm align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none;
}

.link-item {
  @apply text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent;
}
.link-item.active {
  @apply active:bg-transparent hover:bg-gray-100 focus:ring focus:ring-gray-300 dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10;
}
</style>
