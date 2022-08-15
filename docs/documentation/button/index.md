<script setup>
  import BlockExample from './examples/BlockExample.vue'
  import DisabledExample from './examples/DisabledExample.vue'
  import IconsExample from './examples/IconsExample.vue'
  import LayoutExample from './examples/LayoutExample.vue'
  import SizeExample from './examples/SizeExample.vue'
</script>

# Button

## Import

```js
import { UIButton } from '@sorion/windmill-vue'
```

## Size

There are four size, applied by the prop `size`: `larger`, `large`, `regular` (default) and `small`.

```vue-html
<UIButton size="larger">Larger</UIButton>
<UIButton size="large">Large</UIButton>
<UIButton size="regular">Regular</UIButton>
<UIButton size="small">Small</UIButton>
```

<SizeExample />

## Layout

There are three styles, applied by the prop `layout`: `primary` (default), `outline` and `link`.

```vue-html
<UIButton layout="primary">Primary</UIButton>
<UIButton layout="outline">Outline</UIButton>
<UIButton layout="link">Link</UIButton>
```

<LayoutExample />

## Icons

There are three icon positions

* `icon` applies an icon image centered in a button or, if it has children, has the same behavior as `icon-left`

* The other two are `icon-left` and `icon-right`, perfect to use with text

```vue-html
<UIButton :icon-right="HeartIcon">Icon right</UIButton>
<UIButton :icon-left="HeartIcon">Icon left</UIButton>
<UIButton :icon-left="HeartIcon" :icon-right="PencilIcon">Two icons</UIButton>
<UIButton :icon="HeartIcon" aria-label="Like" />
<UIButton :icon="HeartIcon" layout="link" aria-label="Like" />
<UIButton :icon="HeartIcon" layout="outline" aria-label="Like" />
```

<IconsExample />

## Disabled

The `disabled`prop applies disabled styles to any button.

```vue-html
<UIButton disabled>Primary</UIButton>
<UIButton disabled layout="outline">Outline</UIButton>
<UIButton disabled layout="link">Link</UIButton>
```

<DisabledExample />

## Block

The `block` property is a shortcut for `class="w-full"`and makes the button span the whole width of its parent.

```vue-html
<UIButton block>Primary</UIButton>
<UIButton block layout="outline">Outline</UIButton>
<UIButton block layout="link">Link</UIButton>
```

<BlockExample />

## Props overview

| Prop       | Description                   | Type                                    | Default  |
| ---------- | :---------------------------: | :-------------------------------------: | -------: |
| size | define the size of component | `larger`, `large`, `regular`, `small`| `regular`|
| layout | define the layout of component | `primary`, `outline`, `link` | `primary`|
| icon | add an icon to the button | `VNode`, `string` | |
| icon-left | add an icon to the left of the button | `VNode`, `string`| |
| icon-right | add an icon to the left of the button | `VNode`, `small` | `regular`|
| disabled | disable state of button| `boolean`| |
| block | expand full width | `boolean`| |
