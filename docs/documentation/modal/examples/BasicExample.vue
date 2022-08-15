<template>
  <div class="live-v">
    <UIButton class="mb-4" @click="handleOpen()">Open modal</UIButton>
    <UIModal :is-open="isOpen" @close="isOpen = false">
      <UIModalHeader>Modal header</UIModalHeader>
      <UIModalBody>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et eligendi repudiandae voluptatem tempore!
      </UIModalBody>
      <UIModalFooter>
        <UIButton class="w-full sm:w-auto" layout="outline" @click="closeModal()"> Cancel </UIButton>
        <UIButton class="w-full sm:w-auto">Accept</UIButton>
      </UIModalFooter>
    </UIModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);

const handleOpen = () => {
  isOpen.value = !isOpen.value;
};

const closeModal = () => {
  isOpen.value = false;
};
</script>
