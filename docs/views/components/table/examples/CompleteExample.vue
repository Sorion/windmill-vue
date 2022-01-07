<template>
  <div>
    <Example :code="code">
      <TableContainer>
        <UITable>
          <UITableHeader>
            <UITableRow>
              <UITableCell>Client</UITableCell>
              <UITableCell>Amount</UITableCell>
              <UITableCell>Status</UITableCell>
            </UITableRow>
          </UITableHeader>
          <UITableBody>
            <UITableRow>
              <UITableCell>
                <div class="flex items-center text-sm">
                  <UIAvatar src="/img/avatar-1.jpg" alt="Judith" />
                  <span class="font-semibold ml-2">Judith Ipsum</span>
                </div>
              </UITableCell>
              <UITableCell>
                <span class="text-sm">$ 534.87</span>
              </UITableCell>
              <UITableCell>
                <Badge type="success">success</Badge>
              </UITableCell>
            </UITableRow>
          </UITableBody>
        </UITable>
        <UITableFooter>
          <UIPagination :total-results="10" :results-per-page="4" :on-change="() => {}" label="Table navigation" />
        </UITableFooter>
      </TableContainer>
    </Example>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { completeCode } from './code';

export default defineComponent({
  setup() {
    return {
      code: completeCode,
    };
  },
});
</script>
