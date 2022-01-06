<template>
  <div>
    <Example :code="code">
      <UITextarea :valid="false" rows="3" placeholder="Enter some long form content." />
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
