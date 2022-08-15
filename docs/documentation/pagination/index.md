<script setup>
import BaseExample from './examples/BaseExample.vue';
</script>

# Pagination

## Import

```js
import { UIPagination } from '@sorion/windmill-vue'
```

## Base

The base `UIPagination` component needs four required props: `totalResults`, `resultsPerPage`, `onChange` and `label`.

```vue-html
<UIPagination :total-results="120" :results-per-page="10" :on-change="() => {}" label="Page navigation" />
```

<BaseExample />

## Total results

The `UIPagination` component know how many results to render using the `totalResults` prop.

## Results per page

The `resultsPerPage` defines how many results will be shown and how many pages should be created.

## On change

The `on-change` prop gives you the ability to decide what actions should be done when the event of a page change occurs.

## label

 The `label` prop maps to an aria-label attribute inside the `UIPagination` component, so screen readers can announce a descriptive message that explains what are you trying to paginate. Is this a table, posts, images, etc.

## Props overview

| Prop       | Description          | Type                    | Default  |
| ---------- | :------------------: | :---------------------: | -------: |
| total-results | define the length of the data | `number` | |
| results-per-page | define how many results are shown in a page | `number` | |
| label | the aria-label/name of the component | `string` | |
| on-change | define an action to be called when a page changes | `function` | |
