<template>
  <p class="modal-header"><slot></slot></p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UIModalHeader'
});
</script>

<style lang="postcss" scoped>
.modal-header {
  @apply mt-4 mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300;
}
</style>
