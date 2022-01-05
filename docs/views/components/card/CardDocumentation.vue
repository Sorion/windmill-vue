<template>
  <section>
    <h1 class="mb-4">Import</h1>
    <CodeBlock class="mb-8">import { UICard, UICardBody } from '@sorion/windmill-vue'</CodeBlock>

    <h1 class="mb-4">Complete example</h1>
    <p>I think you'll understand better the following sections with a complete, contextualized example.</p>
    <CompleteExample class="mb-8" />

    <h1 class="mb-4">Card</h1>
    <p>
      The <AccentSpan>UICard</AccentSpan> component defines some very basic styles, like background color and borders.
    </p>
    <CardExample class="mb-8" />

    <h1 class="mb-4">Colored</h1>
    <p>
      The <AccentSpan>UICard</AccentSpan> component background colors can be overwritten by using the prop
      <AccentSpan>colored</AccentSpan> and setting new colors using a <AccentSpan>class</AccentSpan>.
    </p>
    <ColoredExample class="mb-8" />

    <h1 class="mb-4">Card body</h1>
    <p>
      The <AccentSpan>UICardBody</AccentSpan> component also define some very basic styles (literally, it's just a
      <AccentSpan>p-4</AccentSpan>) and is required for a nice looking card. The benefit of not applying too much
      styling is that you get a very flexible component.
    </p>
    <CardbodyExample class="mb-8" />

    <PropsArray :props="props" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { CompleteExample, CardExample, ColoredExample, CardbodyExample, props } from './examples';

export default defineComponent({
  components: {
    CompleteExample,
    CardExample,
    ColoredExample,
    CardbodyExample,
  },
  setup() {
    return {
      props: props,
    };
  },
});
</script>
