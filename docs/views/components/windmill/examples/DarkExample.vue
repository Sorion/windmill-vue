<template>
  <div>
    <CodeBlock title="App.vue" language="language-html">{{ code }}</CodeBlock>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { darkCode } from './code';

export default defineComponent({
  setup() {
    return {
      code: darkCode,
    };
  },
});
</script>
