<template>
  <section>
    <h1 class="mb-4">Import</h1>
    <CodeBlock class="mb-8">
      import { UIModal, UIModalHeader, UIModalBody, UIModalFooter } from '@sorion/windmill-vue'
    </CodeBlock>

    <h1 class="mb-4">Basics</h1>
    <p class="mb-4">
      A modal is composed of four components: a root <AccentSpan>UIModal</AccentSpan> that receives one property and
      emit one event, listed below, <AccentSpan>ModalHeader</AccentSpan>, <AccentSpan>ModalBody</AccentSpan> and
      <AccentSpan>ModalFooter</AccentSpan>.
    </p>

    <p class="mb-4">Take a look at this compressed example.</p>
    <BasicsExample class="mb-8" />

    <h1 class="mb-4">Complete example</h1>
    <p>This is what a complete example component looks like, with handlers, component state, etc.</p>
    <p class="mb-4"><i>Note: The following example use the composition API.</i></p>
    <CompleteExample class="mb-8" />

    <PropsArray :props="props" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { BasicsExample, CompleteExample, props } from './examples';

export default defineComponent({
  components: { BasicsExample, CompleteExample },
  setup() {
    return {
      props: props,
    };
  },
});
</script>
