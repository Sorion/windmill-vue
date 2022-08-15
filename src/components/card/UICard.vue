<template>
  <div class="card" :class="{ default: !colored }"><slot></slot></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UICard',
  props: {
    colored: { type: Boolean, default: false },
  },
});
</script>

<style lang="postcss" scoped>
.card {
  @apply min-w-0 rounded-lg ring-1 ring-black ring-opacity-5 overflow-hidden;
}

.default {
  @apply bg-white dark:bg-gray-800;
}
</style>
