<template>
  <section>
    <h1 class="mb-4">Import</h1>
    <CodeBlock class="mb-8">import { UIBadge } from '@sorion/windmill-vue'</CodeBlock>

    <h1 class="mb-4">Type</h1>
    <p>
      There are five types, applied by the prop type: <AccentSpan>success</AccentSpan>,
      <AccentSpan>primary </AccentSpan>(default), <AccentSpan>danger</AccentSpan>, <AccentSpan>warning</AccentSpan> and
      <AccentSpan>neutral</AccentSpan>.
    </p>
    <TypeExample class="mb-8" />

    <PropsArray :props="props" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { TypeExample, props } from './examples';

export default defineComponent({
  components: {
    TypeExample,
  },
  setup() {
    return {
      props: props,
    };
  },
});
</script>
