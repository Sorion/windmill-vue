<script setup>
import BasicsExample from './examples/BasicsExample.vue';
</script>

# Dropdown

## Import

```js
import { UIDropdown } from '@sorion/windmill-vue'
```

## Basics

I think you'll understand better the following sections with a complete, contextualized example.

```vue-html
<UIDropdown :is-open="true" @close="() => {}">
  <UIDropdownItem  class="justify-between">
    <span>Messages</span>
    <UIBadge type="danger">13</UIBadge>
  </UIDropdownItem>
  <UIDropdownItem @click="() => alert('Alerts!')">
    <span>Alerts</span>
  </UIDropdownItem>
</UIDropdown>
```

<BasicsExample />

## Align

There are two alignment options, applied by the align prop: `left` (default) and
`right`. It defines to which side the dropdown will be rendered. Note that it is
`absolute` positioned to the parent element, so the parent must be `relative` positioned.

```vue-html
<UIDropdown align="right" :is-open="true" @close="() => {}">
  <UIDropdownItem  class="justify-between">
    <span>Messages</span>
    <UIBadge type="danger">13</UIBadge>
  </UIDropdownItem>
  <UIDropdownItem @click="() => alert('Alerts!')">
    <span>Alerts</span>
  </UIDropdownItem>
</UIDropdown>
```

## Is open

The `isOpen` prop defines if the dropdown is visible.

```vue-html
<UIDropdown :is-open="true" @close="() => {}">
...
</UIDropdown>
```

## @close

The `@close` event is responsible for the function that will change the value of `isOpen`, closing the dropdown.

::: warning
It is important that the close event sets isOpen to false, and not just toggle the value, to avoid opening the dropdown using Esc. See complete example below.
:::

```vue-html
<UIDropdown :is-open="true" @close="() => {}">
...
</UIDropdown>
```

## Dropdown item

The `UIDropdownItem` is in fact a `UIButton`, styled differently.

Note that every other prop, that is not part of the `UIButton` API exclusively, like @click (things you would normally do in Vue) are available.

```vue-html
<UIDropdownItem  class="justify-between">
  <span>Messages</span>
  <UIBadge type="danger">13</UIBadge>
</UIDropdownItem>
<UIDropdownItem @lick="() => alert('Alerts!')">
  <span>Alerts</span>
</UIDropdownItem>
```

## Complete example

This is what a complete example component looks like, with handlers, component state, etc.

::: info
The following example use the composition API.
:::

```vue
<template>
  <div class="live">
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
```

## Props overview

| Prop       | Description                   | Type                                    | Default  |
| ---------- | :---------------------------: | :-------------------------------------: | -------: |
| align | define the alignment of the dropdown, relative to it's parent | `left`, `right` | `left` |
| is-open | define if the dropdown is visible | `boolean`| |
