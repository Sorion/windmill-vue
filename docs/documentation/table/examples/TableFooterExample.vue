<template>
  <UITableContainer>
    <UITable></UITable>
    <UITableFooter>
      <UIPagination :total-results="1" :results-per-page="1" :on-change="() => {}" label="Table navigation" />
    </UITableFooter>
  </UITableContainer>
</template>

<script lang="ts"></script>
