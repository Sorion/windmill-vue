<template>
  <div>
    <CodeBlock title="DropdownExample.vue" language="language-html">{{ code }}</CodeBlock>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { completeCode } from './code';

export default defineComponent({
  setup() {
    return {
      code: completeCode,
    };
  },
});
</script>
