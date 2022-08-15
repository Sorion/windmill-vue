<template>
  <div class="force-margin fixed inset-0 z-40 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UIBackdrop',
});
</script>

<style lang="postcss" scoped>
.force-margin {
  margin: 0 !important;
  padding: 0 !important;
}
</style>
