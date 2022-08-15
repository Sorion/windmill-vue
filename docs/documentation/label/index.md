<script setup>
import BaseExample from './examples/BaseExample.vue';
import CheckRadioExample from './examples/CheckRadioExample.vue';
import DisabledExample from './examples/DisabledExample.vue';
</script>

# Label

## Import

```js
import { UILabel } from '@sorion/windmill-vue'
```

## Base

The default base `UILabel` doesn't need any special prop and should always enclose all elements that it describes.

```vue-html
<UILabel>
  <span>Name</span>
  <UIInput v-model="text" class="mt-1" />
</UILabel>
```

<BaseExample />

## Checkbox / Radio

The `check` and `radio` props apply the respective styles to the `input`, making them look beautiful. They are interchangeable, so you could use only `radio` or only `check`, but I would recommend that you use the one that better describes its use.

```vue-html
<UILabel radio>
  <UIInput v-model="radio" type="radio" />
  <span class="ml-2">Radio label</span>
</UILabel>
<UILabel check>
  <UIInput v-model="check" type="checkbox" />
  <span class="ml-2">Checkbox label</span>
</UILabel>
```

<CheckRadioExample />

## Disabled

The `disabled` prop applies disabled styles to the `label`. You still need to handle the disabled state individually for the inputs. See example below.

```vue-html
<UILabel radio disabled>
  <UIInput v-model="radio" type="radio" />
  <span class="ml-2">Disabled radio label</span>
</UILabel>
<UILabel check disabled>
  <UIInput v-model="check" type="checkbox" />
  <span class="ml-2">Disabled checkbox label</span>
</UILabel>
<UILabel disabled>
  <span>Name</span>
  <UIInput v-model="text" class="mt-1" />
</UILabel>
```

<DisabledExample />

## Props overview

| Prop       | Description          | Type                    | Default  |
| ---------- | :------------------: | :---------------------: | -------: |
| check | apply layout styles to the labels of checkbox inputs' | `boolean` | |
| radio | apply layout styles to the labels of radio inputs | `boolean` | |
| disabled | apply disabled styles to the label | `boolean` | |
