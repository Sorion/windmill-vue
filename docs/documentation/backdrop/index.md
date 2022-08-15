<script setup>
  import BaseExample from './examples/BaseExample.vue';
</script>

# Backdrop

## Import

```js
import { UIBackdrop } from '@sorion/windmill-vue'
```

## Base

The default base Backdrop doesn't expose any prop, but you can still register main vue event as `@click` etc.

<BaseExample />

## Complete example

This is what a complete example component looks like, with handlers, component state, etc.

::: info
The following example use the composition API.
:::

```vue
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
```
