<template>
  <UITableContainer>
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
            <UIBadge type="success">success</UIBadge>
          </UITableCell>
        </UITableRow>
      </UITableBody>
    </UITable>
    <UITableFooter>
      <UIPagination :total-results="10" :results-per-page="4" :on-change="() => {}" label="Table navigation" />
    </UITableFooter>
  </UITableContainer>
</template>

<script lang="ts"></script>
