<template>
  <div class="modal-body"><slot></slot></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UIModalBody',
});
</script>

<style lang="postcss" scoped>
.modal-body {
  @apply mb-6 text-sm text-gray-700 dark:text-gray-400;
}
</style>
