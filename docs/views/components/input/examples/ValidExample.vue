<template>
  <div>
    <Example :code="code">
      <UIInput v-model="text" valid />
    </Example>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { validCode } from './code';

export default defineComponent({
  setup() {
    return {
      code: validCode,
      text: ref(''),
    };
  },
});
</script>
