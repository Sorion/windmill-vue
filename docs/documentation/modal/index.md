<script setup>
import BasicExample from './examples/BasicExample.vue';
</script>

# Modal

## Import

```js
import { UIModal, UIModalHeader, UIModalBody, UIModalFooter } from '@sorion/windmill-vue'
```

## Basics

A modal is composed of four components: a root `UIModal` that receives one property and emit one event, listed below, `ModalHeader`, `ModalBody` and `ModalFooter`.

Take a look a this compressed example.

```vue-html
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
```

<BasicExample />

## Complete example

This is what a complete example component looks like, with handlers, component state, etc.

:::info
The following example use the composition API.
:::

```vue
<template>
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
```

## Props overview

| Prop       | Description          | Type                    | Default  |
| ---------- | :------------------: | :---------------------: | -------: |
| is-open | define if the modal is open | `boolean` | `false` |
