<template>
  <div>
    <Example :code="code">
      <TableContainer>
        <UITable>Table always sits inside the container</UITable>
      </TableContainer>
    </Example>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { tableCode } from './code';

export default defineComponent({
  setup() {
    return {
      code: tableCode,
    };
  },
});
</script>
