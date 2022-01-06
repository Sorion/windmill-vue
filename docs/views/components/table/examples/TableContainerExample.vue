<template>
  <div>
    <Example :code="code">
      <TableContainer>Table content goes here</TableContainer>
    </Example>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { tableContainerCode } from './code';

export default defineComponent({
  setup() {
    return {
      code: tableContainerCode,
    };
  },
});
</script>
