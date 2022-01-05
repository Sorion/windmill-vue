<template>
  <div>
    <Example :code="code">
      <UIButton size="larger">Larger</UIButton>
      <UIButton size="large">Large</UIButton>
      <UIButton size="regular">Regular</UIButton>
      <UIButton size="small">Small</UIButton>
    </Example>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { sizeCode } from './code';

export default defineComponent({
  setup() {
    return {
      code: sizeCode,
    };
  },
});
</script>
