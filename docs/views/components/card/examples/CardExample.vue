<template>
  <div>
    <Example :code="code">
      <UICard>Lorem ipsum dolor sit amet</UICard>
    </Example>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { cardCode } from './code';

export default defineComponent({
  setup() {
    return {
      code: cardCode,
    };
  },
});
</script>
