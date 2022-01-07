<template>
  <div>
    <Example :code="code">
      <UIHelperText valid>Your password is strong</UIHelperText>
    </Example>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { validCode } from './code';

export default defineComponent({
  setup() {
    return {
      code: validCode,
    };
  },
});
</script>
