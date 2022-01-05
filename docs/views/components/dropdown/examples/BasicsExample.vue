<template>
  <div>
    <Example :code="code">
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
    </Example>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { basicsCode } from './code';

export default defineComponent({
  setup() {
    const isOpen = ref(false);
    const handleOpen = () => {
      isOpen.value = !isOpen.value;
    };
    const handleAlert = () => {
      alert('Alert!');
    };

    return {
      code: basicsCode,
      isOpen,
      handleOpen,
      handleAlert,
    };
  },
});
</script>
