<template>
  <thead class="table-header">
    <slot></slot>
  </thead>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UITableHeader'
});
</script>

<style lang="postcss" scoped>
.table-header {
  @apply text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800;
}
</style>
