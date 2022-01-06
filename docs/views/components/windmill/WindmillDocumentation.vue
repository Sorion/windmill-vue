<template>
  <section>
    <h1 class="mb-4">Import</h1>
    <CodeBlock class="mb-8"> import { WApp } from '@sorion/windmill-vue' </CodeBlock>

    <h1 class="mb-4">Base</h1>
    <p class="mb-4">
      The default <AccentSpan>WApp</AccentSpan> component must encapsulate your root component and it doesn't apply any
      changes by default.
    </p>
    <UIAlert class="mb-4" type="info">
      This is only recommended if you just want to provide a single light theme.
    </UIAlert>

    <BaseExample class="mb-8" />

    <h1 class="mb-4">Dark as default</h1>
    <p class="mb-4">The <AccentSpan>dark</AccentSpan> prop turns the dark theme on.</p>
    <p class="mb-4">
      The <AccentSpan>dark</AccentSpan> prop can also be made reactive by passing it an <AccentSpan>ref</AccentSpan> or
      <AccentSpan>computed</AccentSpan> from vuex, pinia etc.
    </p>
    <DarkExample class="mb-8" />

    <PropsArray :props="props" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { BaseExample, DarkExample, props } from './examples';

export default defineComponent({
  components: {
    BaseExample,
    DarkExample,
  },
  setup() {
    return {
      props: props,
    };
  },
});
</script>
