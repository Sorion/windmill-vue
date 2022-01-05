<template>
  <div>
    <Example :code="code">
      <UIHelperText :valid="false">Provide a valid email</UIHelperText>
    </Example>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { invalidCode } from './code';

export default defineComponent({
  setup() {
    return {
      code: invalidCode,
    };
  },
});
</script>
