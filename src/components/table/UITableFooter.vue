<template>
  <div class="table-footer"><slot></slot></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UITableFooter',
});
</script>

<style lang="postcss" scoped>
.table-footer {
  @apply px-4 py-3 border-t dark:border-gray-700 bg-gray-50 text-gray-500 dark:text-gray-400 dark:bg-gray-800;
}
</style>
