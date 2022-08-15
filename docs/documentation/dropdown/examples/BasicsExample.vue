<template>
  <div class="relative">
    <UIButton @click="handleOpen">Open dropdown</UIButton>
    <UIDropdown :is-open="isOpen" @close="isOpen = false">
      <UIDropdownItem class="justify-between">
        <span>Messages</span>
        <UIBadge type="danger">13</UIBadge>
      </UIDropdownItem>
      <UIDropdownItem @click="handleAlert()">
        <span>Alerts</span>
      </UIDropdownItem>
    </UIDropdown>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);
const handleOpen = () => {
  isOpen.value = !isOpen.value;
};
const handleAlert = () => {
  alert('Alert!');
};
</script>
