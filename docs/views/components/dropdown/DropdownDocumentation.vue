<template>
  <section>
    <h1 class="mb-4">Import</h1>
    <CodeBlock class="mb-8">import { UIDropdown } from '@sorion/windmill-vue'</CodeBlock>

    <h1 class="mb-4">Basics</h1>
    <p>I think you'll understand better the following sections with a complete, contextualized example.</p>
    <BasicsExample class="mb-8" />

    <h1 class="mb-4">Align</h1>
    <p class="mb-4">
      There are two alignment options, applied by the align prop: <AccentSpan>left</AccentSpan> (default) and
      <AccentSpan>right</AccentSpan>. It defines to which side the dropdown will be rendered. Note that it is
      <AccentSpan>absolute</AccentSpan>
      positioned to the parent element, so the parent must be <AccentSpan>relative</AccentSpan> positioned.
    </p>
    <AlignExample class="mb-8" />

    <h1 class="mb-4">Is Open</h1>
    <p class="mb-4">The <AccentSpan>isOpen</AccentSpan> prop defines if the dropdown is visible.</p>
    <OpenCloseExample class="mb-8" />

    <h1 class="mb-4">@close</h1>
    <p class="mb-4">
      The <AccentSpan>@close</AccentSpan> event is responsible for the function that will change the value of
      <AccentSpan>isOpen</AccentSpan>, closing the dropdown.
    </p>
    <UIAlert class="mb-4" type="warning">
      It is important that the close event sets isOpen to false, and not just toggle the value, to avoid opening the
      dropdown using Esc. See complete example below.
    </UIAlert>
    <OpenCloseExample class="mb-8" />

    <h1 class="mb-4">Dropdown Item</h1>
    <p>
      The <AccentSpan>UIDropdownItem</AccentSpan> is in fact a <AccentSpan>UIButton</AccentSpan>, styled differently.
    </p>
    <p class="mb-4">
      Note that every other prop, that is not part of the <AccentSpan>UIButton</AccentSpan> API exclusively, like @click
      (things you would normally do in Vue) are available.
    </p>
    <DropdownItemExample class="mb-8" />

    <h1 class="mb-4">Complete example</h1>
    <p>This is what a complete example component looks like, with handlers, component state, etc.</p>
    <p class="mb-4"><i>Note: The following example use the composition API.</i></p>
    <CompleteExample class="mb-8" />

    <PropsArray :props="props" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { AlignExample, BasicsExample, OpenCloseExample, DropdownItemExample, CompleteExample, props } from './examples';

export default defineComponent({
  components: {
    AlignExample,
    BasicsExample,
    OpenCloseExample,
    DropdownItemExample,
    CompleteExample,
  },
  setup() {
    return {
      props: props,
    };
  },
});
</script>
