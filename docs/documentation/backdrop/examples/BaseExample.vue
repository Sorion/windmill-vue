<template>
  <div>
    <UIButton @click="handleOpen">Open</UIButton>
    <UIBackdrop v-if="isOpen" @click="handleOpen" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);
const handleOpen = () => {
  isOpen.value = !isOpen.value;
};
</script>
