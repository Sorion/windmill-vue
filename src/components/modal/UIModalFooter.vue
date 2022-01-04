<template>
  <footer class="modal-footer"><slot></slot></footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UIModalFooter'
});
</script>

<style lang="postcss" scoped>
.modal-footer {
  @apply flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 dark:bg-gray-800;
}
</style>
