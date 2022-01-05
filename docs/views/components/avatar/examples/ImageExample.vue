<template>
  <div>
    <Example :code="code">
      <UIAvatar src="/docs/assets/img/avatar-1.jpg" alt="Judith" />
    </Example>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { imageCode } from './code';

export default defineComponent({
  setup() {
    return {
      code: imageCode,
    };
  },
});
</script>
