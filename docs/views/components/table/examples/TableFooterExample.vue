<template>
  <div>
    <Example :code="code">
      <TableContainer>
        <UITable></UITable>
        <UITableFooter>
          <UIPagination :total-results="1" :results-per-page="1" :on-change="() => {}" label="Table navigation" />
        </UITableFooter>
      </TableContainer>
    </Example>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { tableFooterCode } from './code';

export default defineComponent({
  setup() {
    return {
      code: tableFooterCode,
    };
  },
});
</script>
