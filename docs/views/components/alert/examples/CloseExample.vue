<template>
  <div>
    <Example :code="code">
      <UIAlert type="success" :on-close="() => {}"> Lorem ipsum </UIAlert>
    </Example>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { closeCode } from './code';

export default defineComponent({
  setup() {
    return {
      code: closeCode,
    };
  },
});
</script>
