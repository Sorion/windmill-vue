<template>
  <section>
    <h1 class="mb-4">Import</h1>
    <CodeBlock class="mb-8">import { UIHelperText } from '@sorion/windmill-vue'</CodeBlock>

    <h1 class="mb-4">Basic</h1>
    <p class="mb-4">
      You should use <AccentSpan>UIHelperText</AccentSpan> to give more information alongside form fields. The default
      base <AccentSpan>UIHelperText</AccentSpan> doesn't need any special prop.
    </p>
    <BasicExample class="mb-8" />

    <h1 class="mb-4">Valid</h1>
    <p class="mb-4">
      The <AccentSpan>valid</AccentSpan> prop applies valid styles to the <AccentSpan>UIHelperText</AccentSpan>.
    </p>
    <ValidExample class="mb-8" />

    <h1 class="mb-4">Invalid</h1>
    <p class="mb-4">
      Give a value of <AccentSpan>false</AccentSpan> to the <AccentSpan>valid</AccentSpan> prop to apply invalid styles
      to the <AccentSpan>UIHelperText</AccentSpan>.
    </p>
    <InvalidExample class="mb-8" />

    <PropsArray :props="props" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { BasicExample, ValidExample, InvalidExample, props } from './examples';

export default defineComponent({
  components: {
    BasicExample,
    ValidExample,
    InvalidExample,
  },
  setup() {
    return {
      props: props,
    };
  },
});
</script>
