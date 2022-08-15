<script setup>
import BaseExample from './examples/BaseExample.vue';
import DisabledExample from './examples/DisabledExample.vue';
import InvalidExample from './examples/InvalidExample.vue';
import MultipleExample from './examples/MultipleExample.vue';
import ValidExample from './examples/ValidExample.vue';
</script>

# Select

## Import

```js
import { UISelect } from '@sorion/windmill-vue'
```

## Base

The default base `select` doesn't need any special prop, but all attributes that you would usually use in *normal* HTML are available here too.

:::warning
If you're not using a `UILabel` component (not recommended), you should use an `aria-label` attribute to give screen readers a label.
:::

```vue-html
<UILabel>
  <span>Requested Limit</span>
  <UISelect class="mt-1">
    <option>$1,000</option>
    <option>$5,000</option>
  </UISelect>
</UILabel>
```

<BaseExample class="mb-8" />

## Multiple

A multi `select` is created including the multiple prop to the`UISelect`.

```vue-html
<UILabel>
  <span>Multiselect</span>
  <UISelect class="mt-1" multiple>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
    <option>Option 4</option>
    <option>Option 5</option>
  </UISelect>
</UILabel>
```

<MultipleExample class="mb-8" />

## Disabled

The `disabled` prop applies disabled styles to the `select`.

```vue-html
<UISelect disabled>
  <option>$1,000</option>
  <option>$5,000</option>
</UISelect>
```

<DisabledExample class="mb-8" />

## Valid

The `valid` prop applies valid styles to the `select`.

```vue-html
<UISelect valid>
  <option>$1,000</option>
  <option>$5,000</option>
</UISelect>
```

<ValidExample class="mb-8" />

## Invalid

Give a value of `false` to the valid prop to apply invalid styles to the `select`.

```vue-html
<UISelect :valid="false">
  <option>$1,000</option>
  <option>$5,000</option>
</UISelect>
```

<InvalidExample class="mb-8" />

## Props overview

| Prop       | Description          | Type                    | Default  |
| ---------- | :------------------: | :---------------------: | -------: |
| disabled | apply disabled styles to the select | `boolean` | |
| valid | apply valid or invalid styles to the select | `boolean` | |
| multiple | create a multi option select | `boolean` | |
