<template>
  <div>
    <Example :code="code">
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
    </Example>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { basicCode } from './code';

export default defineComponent({
  setup() {
    const isOpen = ref(false);

    const handleOpen = () => {
      isOpen.value = !isOpen.value;
    };

    const closeModal = () => {
      isOpen.value = false;
    };

    return {
      isOpen,
      handleOpen,
      closeModal,
      code: basicCode,
    };
  },
});
</script>
