<template>
  <div>
    <Example :code="code">
      <UISelect valid>
        <option>$1,000</option>
        <option>$5,000</option>
      </UISelect>
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
