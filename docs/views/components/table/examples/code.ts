export const completeCode = `<TableContainer>
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
</TableContainer>`;

export const tableContainerCode = '<TableContainer>Table content goes here</TableContainer>';

export const tableCode = `<TableContainer>
<UITable>Table always sits inside the container</UITable>
</TableContainer>`;

export const tableHeaderCode = `<TableContainer>
<UITable>
  <UITableHeader>
    <UITableRow>
      <UITableCell>Name</UITableCell>
      <UITableCell>Address</UITableCell>
    </UITableRow>
  </UITableHeader>
</UITable>
</TableContainer>`;

export const tableBodyCode = `<TableContainer>
<UITable>
  <UITableBody>
    <UITableRow>
      <UITableCell>SpongeBob</UITableCell>
      <UITableCell>124 Conch Street</UITableCell>
    </UITableRow>
  </UITableBody>
</UITable>
</TableContainer>`;

export const tableRowCode = `<TableContainer>
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
</TableContainer>`;

export const tableCellCode = `<TableContainer>
<UITable>
  <UITableBody>
    <UITableRow>
      <UITableCell>SpongeBob</UITableCell>
      <UITableCell>124 Conch Street</UITableCell>
    </UITableRow>
  </UITableBody>
</UITable>
</TableContainer>`;

export const tableFooterCode = `<TableContainer>
<UITable></UITable>
<UITableFooter>
  <UIPagination :total-results="1" :results-per-page="1" :on-change="() => {}" label="Table navigation" />
</UITableFooter>
</TableContainer>`;
