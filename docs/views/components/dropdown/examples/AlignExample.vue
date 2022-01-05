<template>
  <div>
    <CodeBlock language="language-html">{{ code }}</CodeBlock>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { alignCode } from './code';

export default defineComponent({
  setup() {
    return {
      code: alignCode,
    };
  },
});
</script>
