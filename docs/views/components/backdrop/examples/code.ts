export const baseCode = '<UIBackdrop />';

export const completeCode = `<template>
<div>
  <UIButton @click="handleOpen">Open</UIButton>
  <UIBackdrop v-if="isOpen" @click="handleOpen" />
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
setup() {
  const isOpen = ref(false);
  const handleOpen = () => {
    isOpen.value = !isOpen.value;
  };

  return {
    handleOpen,
    isOpen,
  };
},
});
</script>`;
