<template>
  <section>
    <h1 class="mb-4">Import</h1>
    <CodeBlock class="mb-8"> import { UISelect } from '@sorion/windmill-vue' </CodeBlock>

    <h1 class="mb-4">Base</h1>
    <p class="mb-4">
      The default base <AccentSpan>select</AccentSpan> doesn't need any special prop, but all attributes that you would
      usually use in <i>normal</i> HTML are available here too. Note that if you're not using a
      <AccentSpan>UILabel</AccentSpan> component (not recommended), you should use an
      <AccentSpan>aria-label</AccentSpan> attribute to give screen readers a label.
    </p>
    <BaseExample class="mb-8" />

    <h1 class="mb-4">Multiple</h1>
    <p class="mb-4">
      A multi <AccentSpan>select</AccentSpan> is created including the multiple prop to the
      <AccentSpan>UISelect</AccentSpan>.
    </p>
    <MultipleExample class="mb-8" />

    <h1 class="mb-4">Disabled</h1>
    <p class="mb-4">
      The <AccentSpan>disabled</AccentSpan> prop applies disabled styles to the <AccentSpan>select</AccentSpan>.
    </p>
    <DisabledExample class="mb-8" />

    <h1 class="mb-4">Valid</h1>
    <p class="mb-4">
      The <AccentSpan>valid</AccentSpan> prop applies valid styles to the <AccentSpan>select</AccentSpan>.
    </p>
    <ValidExample class="mb-8" />

    <h1 class="mb-4">Invalid</h1>
    <p class="mb-4">
      Give a value of <AccentSpan>false</AccentSpan> to the valid prop to apply invalid styles to the
      <AccentSpan>select</AccentSpan>.
    </p>
    <InvalidExample class="mb-8" />

    <PropsArray :props="props" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { BaseExample, MultipleExample, DisabledExample, ValidExample, InvalidExample, props } from './examples';

export default defineComponent({
  components: { BaseExample, DisabledExample, MultipleExample, ValidExample, InvalidExample },
  setup() {
    return {
      props: props,
    };
  },
});
</script>
