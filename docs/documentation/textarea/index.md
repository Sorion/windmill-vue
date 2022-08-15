<script setup>
import BaseExample from './examples/BaseExample.vue';
import DisabledExample from './examples/DisabledExample.vue';
import InvalidExample from './examples/InvalidExample.vue';
import ValidExample from './examples/ValidExample.vue';
</script>

# Textarea

## Import

```js
import { UITextarea } from '@sorion/windmill-vue' 
```

## Base

The default base `select` doesn't need any special prop, but all attributes that you would
usually use in *normal* HTML are available here too.

:::warning
If you're not using a `UILabel` component (not recommended), you should use an `aria-label` attribute to give screen readers a label.
:::

```vue-html
<UILabel>
  <span>Message</span>
  <UITextarea class="mt-1" rows="3" placeholder="Enter some long form content." />
</UILabel>
```

<BaseExample class="mb-8" />

## Disabled

The `disabled` prop applies disabled styles to the `textarea`.

```vue-html
<UITextarea disabled rows="3" placeholder="Enter some long form content." />
```

<DisabledExample class="mb-8" />

## Valid

The `valid` prop applies valid styles to the `textarea`.

```vue-html
 <UITextarea valid rows="3" placeholder="Enter some long form content." />
 ```

<ValidExample class="mb-8" />

## Invalid

Give a value of `false` to the `valid` prop to apply invalid styles
to the `textarea`.

```vue-html
 <UITextarea :valid="false" rows="3" placeholder="Enter some long form content." />
 ```

<InvalidExample class="mb-8" />

## Props overview

| Prop       | Description          | Type                    | Default  |
| ---------- | :------------------: | :---------------------: | -------: |
| disabled | apply disabled styles to the select | `boolean` | |
| valid | apply valid or invalid styles to the select | `boolean` | |
