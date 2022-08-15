<template>
  <UIButton size="pagination" :layout="isActive ? 'primary' : 'link'">{{ page }}</UIButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UIPageButton',
  props: {
    page: { type: [String, Number], required: true },
    isActive: { type: Boolean, required: true },
  },
});
</script>
