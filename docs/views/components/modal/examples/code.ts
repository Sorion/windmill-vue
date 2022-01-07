export const basicCode = `<UIModal :is-open="isModalOpen" @close="isModalOpen = false">
  <UIModalHeader>Modal header</UIModalHeader>
  <UIModalBody>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et eligendi repudiandae voluptatem tempore!
  </UIModalBody>
  <UIModalFooter>
    <UIButton class="w-full sm:w-auto" layout="outline" @click="closeModal()"> Cancel </UIButton>
    <UIButton class="w-full sm:w-auto">Accept</UIButton>
  </UIModalFooter>
</UIModal>`;

export const completeCode = `<template>
  <UIButton @click="handleOpen">Open modal</UIButton>
  <UIModal :is-open="isModalOpen" @close="isModalOpen = false">
    <UIModalHeader>Modal header</UIModalHeader>
    <UIModalBody>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et eligendi repudiandae voluptatem tempore!
    </UIModalBody>
    <UIModalFooter>
      <UIButton class="w-full sm:w-auto" layout="outline" @click="closeModal()"> Cancel </UIButton>
      <UIButton class="w-full sm:w-auto">Accept</UIButton>
    </UIModalFooter>
  </UIModal>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

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
      closeModal
    };
  },
});
</script>
`;

export const props = [
  {
    prop: 'isOpen',
    description: 'define if the modal is open',
    types: ['boolean'],
    defaultValue: 'false',
  },
];
