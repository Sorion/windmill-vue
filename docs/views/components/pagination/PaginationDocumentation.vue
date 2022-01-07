<template>
  <section>
    <h1 class="mb-4">Import</h1>
    <CodeBlock class="mb-8"> import { UIPagination } from '@sorion/windmill-vue' </CodeBlock>

    <h1 class="mb-4">Base</h1>
    <p class="mb-4">
      The base <AccentSpan>UIPagination</AccentSpan> component needs four required props:
      <AccentSpan>totalResults</AccentSpan>, <AccentSpan>resultsPerPage</AccentSpan>,
      <AccentSpan>onChange</AccentSpan> and <AccentSpan>label</AccentSpan>.
    </p>
    <BaseExample class="mb-8" />

    <h1 class="mb-4">Total results</h1>
    <p class="mb-8">
      The <AccentSpan>UIPagination</AccentSpan> component know how many results to render using the
      <AccentSpan>totalResults</AccentSpan> prop.
    </p>

    <h1 class="mb-4">Results per page</h1>
    <p class="mb-8">
      The <AccentSpan>resultsPerPage</AccentSpan> defines how many results will be shown and how many pages should be
      created.
    </p>

    <h1 class="mb-4">onChange</h1>
    <p class="mb-8">
      The <AccentSpan>onChange</AccentSpan> prop gives you the ability to decide what actions should be done when the
      event of a page change occurs.
    </p>

    <h1 class="mb-4">Label</h1>
    <p class="mb-8">
      The <AccentSpan>label</AccentSpan> prop maps to an aria-label attribute inside the
      <AccentSpan>UIPagination</AccentSpan> component, so screen readers can announce a descriptive message that
      explains what are you trying to paginate. Is this a table, posts, images, etc. pagination
    </p>

    <PropsArray :props="props" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { BaseExample, props } from './examples';

export default defineComponent({
  components: { BaseExample },
  setup() {
    return {
      props: props,
    };
  },
});
</script>
