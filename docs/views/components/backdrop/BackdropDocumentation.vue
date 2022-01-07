<template>
  <section>
    <h1 class="mb-4">Import</h1>
    <CodeBlock class="mb-8">import { UIBackdrop } from '@sorion/windmill-vue'</CodeBlock>

    <h1 class="mb-4">Base</h1>
    <p class="mb-4">
      The default base Backdrop doesn't expose any prop, but you can still register main vue event as
      <AccentSpan>@click</AccentSpan> etc.
    </p>
    <BaseExample class="mb-8" />

    <h1 class="mb-4">Complete example</h1>
    <p>This is what a complete example component looks like, with handlers, component state, etc.</p>
    <p class="mb-4"><i>Note: The following example use the composition API.</i></p>
    <CompleteExample class="mb-8" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { BaseExample, CompleteExample } from './examples';

export default defineComponent({
  components: {
    BaseExample,
    CompleteExample,
  },
});
</script>
