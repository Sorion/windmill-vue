<template>
  <div>
    <Example :code="code">
      <UIAvatar size="large" src="/docs/assets/img/avatar-1.jpg" alt="Judith" />
      <UIAvatar src="/docs/assets/img/avatar-1.jpg" alt="Judith" />
      <UIAvatar size="small" src="/docs/assets/img/avatar-1.jpg" alt="Judith" />
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
