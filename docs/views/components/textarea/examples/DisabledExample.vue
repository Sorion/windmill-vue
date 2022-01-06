<template>
  <div>
    <Example :code="code">
      <UITextarea disabled rows="3" placeholder="Enter some long form content." />
    </Example>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { disabledCode } from './code';

export default defineComponent({
  setup() {
    return {
      code: disabledCode,
    };
  },
});
</script>
