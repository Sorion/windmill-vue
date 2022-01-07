<template>
  <div>
    <Example :code="code">
      <UIAlert>Lorem ipsum dolor sit</UIAlert>
      <UIAlert type="success">Lorem ipsum dolor sit</UIAlert>
      <UIAlert type="danger">Lorem ipsum dolor sit</UIAlert>
      <UIAlert type="warning">Lorem ipsum dolor sit</UIAlert>
      <UIAlert type="info">Lorem ipsum dolor sit</UIAlert>
      <UIAlert type="neutral">Lorem ipsum dolor sit</UIAlert>
    </Example>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { typeCode } from './code';

export default defineComponent({
  setup() {
    return {
      code: typeCode,
    };
  },
});
</script>
