<template>
  <section>
    <h1 class="mb-4">Import</h1>
    <CodeBlock class="mb-8">import { UIButton } from '@sorion/windmill-vue'</CodeBlock>

    <h1 class="mb-4">Size</h1>
    <p>
      There are four sizes, applied by the prop size: <AccentSpan>larger</AccentSpan>, <AccentSpan>large</AccentSpan>,
      <AccentSpan>regular</AccentSpan> (default) and <AccentSpan>small</AccentSpan>.
    </p>
    <SizeExample class="mb-8" />

    <h1>Layout</h1>
    <p>
      There are three styles, applied by the prop layout: <AccentSpan>primary</AccentSpan> (default),
      <AccentSpan>outline</AccentSpan> and <AccentSpan>link</AccentSpan>.
    </p>
    <LayoutExample class="mb-8" />

    <h1 class="mb-4">Icons</h1>
    <p>
      There are three icon positions: icon applies an <AccentSpan>icon</AccentSpan> image centered in a button or, if it
      has children, has the same behavior as <AccentSpan>iconLeft</AccentSpan>. The other two are
      <AccentSpan>iconLeft</AccentSpan> and <AccentSpan>iconRight</AccentSpan>, perfect to use with text.
    </p>

    <IconsExample class="mb-8" />

    <h1 class="mb-4">Disabled</h1>
    <p>The <AccentSpan>disabled</AccentSpan> prop applies disabled styles to any button.</p>
    <DisabledExample class="mb-8" />

    <h1 class="mb-4">Block</h1>
    <p>
      The block property is a shortcut for <AccentSpan>className="w-full"</AccentSpan> and makes the
      <AccentSpan>Button</AccentSpan> span the whole width of its parent.
    </p>
    <BlockExample class="mb-8" />

    <h1 class="mb-4">Props overview</h1>
    <PropsOverview class="mb-8" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { BlockExample, DisabledExample, IconsExample, LayoutExample, PropsOverview, SizeExample } from './examples';

export default defineComponent({
  name: 'Button',
  components: {
    BlockExample,
    SizeExample,
    LayoutExample,
    DisabledExample,
    PropsOverview,
    IconsExample,
  },
});
</script>
