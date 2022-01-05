<template>
  <div>
    <Example :code="code">
      <UIHelperText>Password should have more than 6 characters</UIHelperText>
    </Example>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { basicCode } from './code';

export default defineComponent({
  setup() {
    return {
      code: basicCode,
    };
  },
});
</script>
