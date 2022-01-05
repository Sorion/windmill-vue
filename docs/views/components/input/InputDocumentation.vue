<template>
  <section>
    <h1 class="mb-4">Import</h1>
    <CodeBlock class="mb-8">import { UIInput } from '@sorion/windmill-vue'</CodeBlock>

    <h1 class="mb-4">Base</h1>
    <p class="mb-4">
      The default base input doesn't need any special prop, but all attributes that you would usually use in normal HTML
      are available here too.
    </p>
    <p class="italic mb-4">
      Note that if you're not using a Label component (not recommended), you should use an aria-label attribute to give
      screen readers a label.
    </p>
    <BasicExample class="mb-8" />

    <h1 class="mb-4">Disabled</h1>
    <p class="mb-4">
      The <AccentSpan>disabled</AccentSpan> prop applies disabled styles to the <AccentSpan>input</AccentSpan>.
    </p>
    <DisabledExample class="mb-8" />

    <h1 class="mb-4">Valid</h1>
    <p class="mb-4">
      The <AccentSpan>valid</AccentSpan> prop applies valid styles to the <AccentSpan>input</AccentSpan>.
    </p>
    <ValidExample class="mb-8" />

    <h1 class="mb-4">Invalid</h1>
    <p class="mb-4">
      Give a value of <AccentSpan>false</AccentSpan> to the <AccentSpan>valid</AccentSpan> prop to apply invalid styles
      to the <AccentSpan>input</AccentSpan>.
    </p>
    <InvalidExample class="mb-8" />

    <h1 class="mb-4">Helper text</h1>
    <p class="mb-4">
      See <AccentSpan>UIHelperText</AccentSpan> for more. Use <AccentSpan>UIHelperText</AccentSpan> to give more
      information about the related input.
    </p>
    <HelperTextExample class="mb-8" />

    <h1 class="mb-4">Radio</h1>
    <RadioExample class="mb-8" />

    <h1 class="mb-4">Checkbox</h1>
    <CheckboxExample class="mb-8" />

    <PropsArray :props="props" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import {
  BasicExample,
  DisabledExample,
  ValidExample,
  InvalidExample,
  HelperTextExample,
  RadioExample,
  CheckboxExample,
  props,
} from './examples';

export default defineComponent({
  components: {
    BasicExample,
    DisabledExample,
    ValidExample,
    InvalidExample,
    HelperTextExample,
    RadioExample,
    CheckboxExample,
  },
  setup() {
    return {
      props: props,
    };
  },
});
</script>
