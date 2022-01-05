<template>
  <div>
    <Example :code="code">
      <UIInput v-model="text" disabled />
    </Example>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { disabledCode } from './code';

export default defineComponent({
  setup() {
    return {
      code: disabledCode,
      text: ref(''),
    };
  },
});
</script>
