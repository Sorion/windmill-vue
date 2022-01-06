<template>
  <div>
    <Example :code="code">
      <TableContainer>
        <UITable>
          <UITableBody>
            <UITableRow>
              <UITableCell>SpongeBob</UITableCell>
              <UITableCell>124 Conch Street</UITableCell>
            </UITableRow>
            <UITableRow>
              <UITableCell>Patrick</UITableCell>
              <UITableCell>120 Conch Street</UITableCell>
            </UITableRow>
          </UITableBody>
        </UITable>
      </TableContainer>
    </Example>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { tableRowCode } from './code';

export default defineComponent({
  setup() {
    return {
      code: tableRowCode,
    };
  },
});
</script>
