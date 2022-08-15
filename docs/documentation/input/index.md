<script setup>
import BasicExample from './examples/BasicExample.vue';
import CheckboxExample from './examples/CheckboxExample.vue';
import DisabledExample from './examples/DisabledExample.vue';
import HelperTextExample from './examples/HelperTextExample.vue';
import InvalidExample from './examples/InvalidExample.vue';
import RadioExample from './examples/RadioExample.vue';
import ValidExample from './examples/ValidExample.vue';
</script>

# Input

## Import

```js
import { UIInput } from '@sorion/windmill-vue'
```

## Base

The default base input doesn't need any special prop, but all attributes that you would usually use in normal HTML are available here too.

:::info
Note that if you're not using a Label component (not recommended), you should use an aria-label attribute to give screen readers a label.
:::

```vue-html
<UIInput v-model="text" />
<UIInput v-model="text2" aria-label="Bad" placeholder="Prefer a UILabel" />
<UILabel>
  <span>Better to use a label</span>
  <UIInput v-model="text3" class="mt-1" />
</UILabel>
```

<BasicExample />

## Disabled

The `disabled` prop applies disabled styles to the `input`.

```vue-html
<UIInput v-model="text" disabled />
```

<DisabledExample />

## Valid

The `valid` prop applies valid styles to the `input`.

```vue-html
<UIInput v-model="text" valid />
```

<ValidExample />

## Invalid

Give a value of `false` to the `valid` prop to apply invalid styles to the `input`.

```vue-html
<UIInput v-model="text" :valid="false" />
```

<InvalidExample />

## Helper text

See [Helper text](../helper-text/) for more. Use `UIHelperText` to give more information about the related input.

```vue-html
<UILabel>
  <UIInput v-model="text" type="text" />
  <UIHelperText>Password should have more than 6 characters</UIHelperText>
</UILabel>
<UILabel>
  <UIInput v-model="text2" type="text" valid />
  <UIHelperText valid>Your password is strong</UIHelperText>
</UILabel>
<UILabel>
  <UIInput v-model="text3" type="text" :valid="false" />
  <UIHelperText :valid="false">Provide a valid email</UIHelperText>
</UILabel>
```

<HelperTextExample />

## Radio

```vue-html
<UIInput v-model="radio" type="radio" />
<UIInput v-model="radio2" type="radio" checked />
<div>
  <UILabel radio>
    <UIInput v-model="radio3" type="radio" />
    <span class="ml-2">Go to UILabel to read more</span>
  </UILabel>
</div>
```

<RadioExample />

## Checkbox

```vue-html
<UIInput v-model="check" type="checkbox" />
<UIInput v-model="check2" type="checkbox" checked />
<div>
  <UILabel check>
    <UIInput v-model="check3" type="checkbox" />
    <span class="ml-2">Go to UILabel to read more</span>
  </UILabel>
</div>
```

<CheckboxExample />

## Props overview

| Prop       | Description          | Type                    | Default  |
| ---------- | :------------------: | :---------------------: | -------: |
| type | define the type of the input. See Textarea for textareas | `string` | `text` |
| disabled | apply disabled styles to the input | `boolean` | |
| valid | apply valid or invalid styles to the input | `boolean` | |
