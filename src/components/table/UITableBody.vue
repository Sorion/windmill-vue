<template>
  <tbody class="table-body">
    <slot></slot>
  </tbody>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UITableBody',
});
</script>

<style lang="postcss" scoped>
.table-body {
  @apply bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 text-gray-700 dark:text-gray-400;
}
</style>
