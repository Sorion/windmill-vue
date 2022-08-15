<script setup>
import CardbodyExample from './examples/CardbodyExample.vue';
import CardExample from './examples/CardExample.vue';
import ColoredExample from './examples/ColoredExample.vue';
import CompleteExample from './examples/CompleteExample.vue';
</script>

# Card

## Import

```js
  import { UICard, UICardBody } from '@sorion/windmill-vue'
```

## Complete example

I think you'll understand better the following sections with a complete, contextualized example.

```vue-html
<UICard>
  <UICardBody>
    <p class="mb-4 font-semibold text-gray-600 dark:text-gray-300">Revenue</p>
    <p class="text-gray-600 dark:text-gray-400">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum commodi a omnis numquam quodTotam
      exercitationem quos hic ipsam at qui cum numquam, sed amet ratione! Ratione, nihil dolorum.
    </p>
  </UICardBody>
</UICard>
```

<CompleteExample />

## Card container

The `UICard` component defines some very basic styles, like background coland borders.

```vue-html
<UICard>Lorem ipsum dolor sit amet</UICard>
```

<CardExample />

## Colored

The `UICard` component background colors can be overwritten by using the propv`colored` and setting new colors using a `class`.

```vue-html
<UICard colored class="bg-purple-600">
  <UICardBody>
    <p class="mb-4 font-semibold text-white">Revenue</p>
    <p class="text-white">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum commodi a omnis numquam quod? Totam
      exercitationem quos hic ipsam at qui cum numquam, sed amet ratione! Ratione, nihil dolorum.
    </p>
  </UICardBody>
</UICard>
```

<ColoredExample />

## Card body

The `UICardBody` component also define some very basic styles (literally, it's just a `p-4`) and is required for a nice looking card. The benefit of not applying too much styling is that you get a very flexible component.

```vue-html
<UICard class="flex h-48">
  <img class="object-cover w-1/3" src="/img/forest.jpeg" />
  <UICardBody>
    <p class="mb-4 font-semibold text-gray-600 dark:text-gray-300">Revenue</p>
    <p class="text-gray-600 dark:text-gray-400">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum commodi a omnis numquam quodTotam
      exercitationem quos hic ipsam at qui cum numquam, sed amet ratione! Ratione, nihil dolorum.
    </p>
  </UICardBody>
</UICard>
```

<CardbodyExample />

## Props overview

| Prop       | Description                   | Type                                    | Default  |
| ---------- | :---------------------------: | :-------------------------------------: | -------: |
| colored | remove the default background colors | `boolean` | |
