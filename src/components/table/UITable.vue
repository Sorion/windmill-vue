<template>
  <div class="table-wrapper">
    <table class="table">
      <slot></slot>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UITable',
});
</script>

<style lang="postcss" scoped>
.table-wrapper {
  @apply w-full overflow-x-auto;
}

.table {
  @apply w-full whitespace-nowrap;
}
</style>
