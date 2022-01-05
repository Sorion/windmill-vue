<template>
  <section>
    <h1 class="mb-4">Import</h1>
    <CodeBlock class="mb-8">import { UIAvatar } from '@sorion/windmill-vue'</CodeBlock>

    <h1 class="mb-4">Size</h1>
    <p>
      There are three sizes, applied by the prop size: <AccentSpan>large</AccentSpan>,
      <AccentSpan>regular</AccentSpan> (default) and <AccentSpan>small</AccentSpan>.
    </p>
    <SizeExample class="mb-8" />

    <h1 class="mb-4">Image</h1>
    <p>Pass an image to the avatar using the prop <AccentSpan>src</AccentSpan>.</p>
    <ImageExample class="mb-8" />

    <h1 class="mb-4">Alt</h1>
    <p>Pass an alternate text to the avatar using the prop <AccentSpan>alt</AccentSpan>.</p>
    <AlternateExample class="mb-8" />

    <PropsArray :props="props" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { SizeExample, ImageExample, AlternateExample, props } from './examples';

export default defineComponent({
  components: {
    SizeExample,
    ImageExample,
    AlternateExample,
  },
  setup() {
    return {
      props: props,
    };
  },
});
</script>
