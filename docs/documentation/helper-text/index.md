<script setup>
import BasicExample from './examples/BasicExample.vue';
import InvalidExample from './examples/InvalidExample.vue';
import ValidExample from './examples/ValidExample.vue';
</script>

# Helper text

## Import

```js
import { UIHelperText } from '@sorion/windmill-vue'
```

## Basics

You should use `UIHelperText` to give more information alongside form fields. The default base `UIHelperText` doesn't need any special prop.

```vue-html
<UIHelperText>Password should have more than 6 characters</UIHelperText>
 ```

<BasicExample />

## Valid

The `valid` prop applies valid styles to the `UIHelperText`.

```vue-html
<UIHelperText valid>Your password is strong</UIHelperText>
```

<ValidExample />

## Invalid

Give a value of `false` to the `valid` prop to apply invalid styles to the `UIHelperText`.

```vue-html
<UIHelperText :valid="false">Provide a valid email</UIHelperText>
```

<InvalidExample />

## Props overview

| Prop       | Description                   | Type                                    | Default  |
| ---------- | :---------------------------: | :-------------------------------------: | -------: |
| valid | apply valid or invalid styles to the input | `boolean` | |
