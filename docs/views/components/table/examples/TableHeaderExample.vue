<template>
  <div>
    <Example :code="code">
      <TableContainer>
        <UITable>
          <UITableHeader>
            <UITableRow>
              <UITableCell>Name</UITableCell>
              <UITableCell>Address</UITableCell>
            </UITableRow>
          </UITableHeader>
        </UITable>
      </TableContainer>
    </Example>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { tableHeaderCode } from './code';

export default defineComponent({
  setup() {
    return {
      code: tableHeaderCode,
    };
  },
});
</script>
