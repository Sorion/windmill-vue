<script setup>
  import TypeExample from './examples/TypeExample.vue'
</script>

# Badge

## Import

```js
import { UIBadge } from '@sorion/windmill-vue'
```

## Type

There are five types, applied by the prop type: `success`,
`primary`(default), `danger`, `warning` and `neutral`.

```vue-html
<UIBadge>primary</UIBadge>
<UIBadge type="neutral">neutral</UIBadge>
<UIBadge type="success">success</UIBadge>
<UIBadge type="danger">danger</UIBadge>
<UIBadge type="warning">warning</UIBadge>
```

<TypeExample />

## Props overview

| Prop       | Description                   | Type                                    | Default  |
| ---------- | :---------------------------: | :-------------------------------------: | -------: |
| type | define the color of component | `success`, `primary`, `danger`, `warning`, `neutral`| `primary`|
