<template>
  <nav class="flex items-center justify-between px-6 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 shadow-lg">
    <a class="text-gray-700 dark:text-gray-400" href="#">
      <!-- From HeroIcons -->
      <ChatAlt2Icon class="w-6 h-6 text-purple-600" />
    </a>
    <ul class="flex space-x-4 list-none">
      <li>
        <UIButton layout="link">Products</UIButton>
      </li>
      <li>
        <UIButton layout="link">Contact</UIButton>
      </li>
      <li>
        <UIButton>Login</UIButton>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ChatAlt2Icon } from '@heroicons/vue/solid';
</script>

<style scoped lang="postcss">
li {
  margin: 0 !important;
}
</style>
