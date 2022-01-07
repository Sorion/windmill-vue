<template>
  <section>
    <h1 class="mb-4">Import</h1>
    <CodeBlock class="mb-8">import { UILabel } from '@sorion/windmill-vue'</CodeBlock>

    <h1 class="mb-4">Base</h1>
    <p class="mb-4">
      The default base <AccentSpan>UILabel</AccentSpan> doesn't need any special prop and should always enclose all
      elements that it describes.
    </p>
    <BaseExample class="mb-8" />

    <h1 class="mb-4">Checkbox / Radio</h1>
    <p class="mb-4">
      The <AccenSpan>check</AccenSpan> and <AccenSpan>radio</AccenSpan> props apply the respective styles to the
      <AccenSpan>input</AccenSpan>, making them look beautiful. They are interchangeable, so you could use only
      <AccenSpan>radio</AccenSpan> or only <AccenSpan>check</AccenSpan>, but I would recommend that you use the one that
      better describes its use.
    </p>
    <CheckRadioExample class="mb-8" />

    <h1 class="mb-4">Disabled</h1>
    <p class="mb-4">
      The <AccentSpan>disabled</AccentSpan> prop applies disabled styles to the <AccentSpan>label</AccentSpan>. You
      still need to handle the disabled state individually for the inputs. See example below.
    </p>
    <DisabledExample class="mb-8" />

    <PropsArray :props="props" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { BaseExample, CheckRadioExample, DisabledExample, props } from './examples';

export default defineComponent({
  components: {
    BaseExample,
    CheckRadioExample,
    DisabledExample,
  },
  setup() {
    return {
      props: props,
    };
  },
});
</script>
