<template>
  <div class="table-container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UITableContainer'
});
</script>

<style lang="postcss" scoped>
.table-container {
  @apply w-full overflow-hidden rounded-lg ring-1 ring-black ring-opacity-5;
}
</style>
