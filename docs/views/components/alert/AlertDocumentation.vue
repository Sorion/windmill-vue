<template>
  <section>
    <h1 class="mb-4">Import</h1>
    <CodeBlock class="mb-8">import { UIAlert } from '@sorion/windmill-vue'</CodeBlock>

    <h1 class="mb-4">Type</h1>
    <p>
      There are five types of alerts, applied by the prop type: <AccentSpan>success</AccentSpan>,
      <AccentSpan>danger</AccentSpan>, <AccentSpan>warning</AccentSpan>, <AccentSpan>info</AccentSpan> and
      <AccentSpan>neutral</AccentSpan> (default).
    </p>
    <p>Every alert comes with an icon that helps identifying the type of alert for colorblind people.</p>
    <TypeExample class="mb-8" />

    <h1 class="mb-4">Close</h1>
    <p>
      The <AccentSpan>onClose</AccentSpan> prop is responsible for showing the close button and executing the passed
      function.
    </p>
    <CloseExample class="mb-8" />

    <PropsArray :props="props" class="mb-8" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { TypeExample, CloseExample, props } from './examples';

export default defineComponent({
  components: {
    TypeExample,
    CloseExample,
  },
  setup() {
    return {
      props: props,
    };
  },
});
</script>
