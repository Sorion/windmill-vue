<template>
  <div>
    <Example :code="code">
      <UIInput v-model="text" :valid="false" />
    </Example>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { invalidCode } from './code';

export default defineComponent({
  setup() {
    return {
      code: invalidCode,
      text: ref(''),
    };
  },
});
</script>
