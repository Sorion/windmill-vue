<template>
  <div>
    <Example :code="code">
      <UIButton layout="primary">Primary</UIButton>
      <UIButton layout="outline">Outline</UIButton>
      <UIButton layout="link">Link</UIButton>
    </Example>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { layoutCode } from './code';

export default defineComponent({
  setup() {
    return {
      code: layoutCode,
    };
  },
});
</script>
