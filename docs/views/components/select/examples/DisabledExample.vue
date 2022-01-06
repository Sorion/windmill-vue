<template>
  <div>
    <Example :code="code">
      <UISelect disabled>
        <option>$1,000</option>
        <option>$5,000</option>
      </UISelect>
    </Example>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { disabledCode } from './code';

export default defineComponent({
  setup() {
    return {
      code: disabledCode,
    };
  },
});
</script>
