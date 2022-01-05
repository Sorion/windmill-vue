<template>
  <section class="example-container">
    <div class="label-container">
      <span class="left">Preview</span>
      <span class="right">Code</span>
    </div>

    <div class="block-container">
      <div class="live p-3 w-1/2">
        <slot></slot>
      </div>

      <!-- Code -->

      <div class="w-1/2 extends-color">
        <CodeExample :code="code" :language="language"></CodeExample>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Example',
  props: {
    code: { type: String, default: '' },
    language: { type: String, default: 'language-html' },
  },
});
</script>

<style lang="postcss" scoped>
.example-container {
  @apply flex flex-col mx-4 my-6;
  min-height: 15rem;
}

.label-container {
  @apply flex justify-between;
}

.label-container > span {
  @apply bg-green-500 rounded-t-md px-2 text-xs text-white;
}

.block-container {
  @apply flex justify-between border-green-400 border;
}

.live {
  @apply flex-1 border-r border-green-400 bg-white dark:bg-gray-900;
}

.live > :not(:only-child) {
  @apply mr-4 mb-4;
}

.extends-color {
  background: #f5f2f0;
}
</style>
