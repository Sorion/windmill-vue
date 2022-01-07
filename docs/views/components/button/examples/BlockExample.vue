<template>
  <div>
    <Example :code="code">
      <UIButton block>Primary</UIButton>
      <UIButton block layout="outline">Outline</UIButton>
      <UIButton block layout="link">Link</UIButton>
    </Example>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { blockCode } from './code';

export default defineComponent({
  setup() {
    return {
      code: blockCode,
    };
  },
});
</script>
