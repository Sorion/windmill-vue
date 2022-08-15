<script setup>
import TypeExample from './examples/TypeExample.vue';
import CloseExample from './examples/CloseExample.vue';
</script>

# Alert

## Import

```js
import { UIAlert } from '@sorion/windmill-vue'
```

## Type

There are five types of alerts, applied by the prop type: `success`,`danger`, `warning`, `info` and `neutral` (default).

Every alert comes with an icon that helps identifying the type of alert for colorblind people.

```vue-html
<UIAlert>Lorem ipsum dolor sit</UIAlert>
<UIAlert type="success">Lorem ipsum dolor sit</UIAlert>
<UIAlert type="danger">Lorem ipsum dolor sit</UIAlert>
<UIAlert type="warning">Lorem ipsum dolor sit</UIAlert>
<UIAlert type="info">Lorem ipsum dolor sit</UIAlert>
<UIAlert type="neutral">Lorem ipsum dolor sit</UIAlert>
```

<TypeExample />

## Close

The `onClose` prop is responsible for showing the close button and executing the passed function.

```vue-html
<template>
  <div>
    <UIAlert type="success" :on-close="() => {}"> Lorem ipsum </UIAlert>
  </div>
</template>
```

<CloseExample />

## Props overview

| Prop       | Description                   | Type                                    | Default  |
| ---------- |:-----------------------------:| :--------------------------------------:| -------: |
| type       | define the style of component | `success`, `danger`, `warning`, `info`, `neutral` | `neutral`  |
| on-close   | if present, show a close button and executes a function | function      |          |
