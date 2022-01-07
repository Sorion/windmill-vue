<template>
  <div>
    <Example :code="code">
      <UIButton disabled>Primary</UIButton>
      <UIButton disabled layout="outline">Outline</UIButton>
      <UIButton disabled layout="link">Link</UIButton>
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
