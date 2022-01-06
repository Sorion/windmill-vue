<template>
  <div>
    <Example :code="code">
      <UITextarea valid rows="3" placeholder="Enter some long form content." />
    </Example>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { validCode } from './code';

export default defineComponent({
  setup() {
    return {
      code: validCode,
    };
  },
});
</script>
