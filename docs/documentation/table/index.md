<script setup>
import CompleteExample from './examples/CompleteExample.vue';
import TableBodyExample from './examples/TableBodyExample.vue';
import TableCellExample from './examples/TableCellExample.vue';
import TableContainerExample from './examples/TableContainerExample.vue';
import TableExample from './examples/TableExample.vue';
import TableFooterExample from './examples/TableFooterExample.vue';
import TableHeaderExample from './examples/TableHeaderExample.vue';
import TableRowExample from './examples/TableRowExample.vue';
</script>

# Table

## Import

```js
import { UITableContainer, UITable, UITableHeader, UITableBody, UITableRow, UITableCell } from '@sorion/windmill-vue'
```

## Complete example

I think you'll understand better the following sections with a complete, contextualized example.

```vue-html
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
```

<LivePreview>
  <CompleteExample />
</LivePreview>

## Table Container

The `UITableContainer` is responsible for containing the entire table inside borders and keeps it responsible. In smaller screens, the table will gently show a horizontal scroll.

```vue-html
<UITableContainer>Table content goes here</UITableContainer>
```

<LivePreview>
  <TableContainerExample />
</LivePreview>

## Table element

The `UITable` is exaclty the table element, just the necessary for it to work well inside the container.

```vue-html
<UITableContainer>
  <UITable>Table always sits inside the container</UITable>
</UITableContainer>
```

<LivePreview>
  <TableExample />
</LivePreview>

## Table Header

The `UITableHeader` is the `thead` element with specific styles added to create a unique header for tables. This is where you place column titles.

```vue-html
<UITableContainer>
  <UITable>
    <UITableHeader>
      <UITableRow>
        <UITableCell>Name</UITableCell>
        <UITableCell>Address</UITableCell>
      </UITableRow>
    </UITableHeader>
  </UITable>
</UITableContainer>
```

<LivePreview>
  <TableHeaderExample />
</LivePreview>

## Table Body

The `UITableBody` is the `tbody` element with specific styles added to create unique table styles, like the division between rows. This is where you place general table data rows.

```vue-html
<UITableContainer>
  <UITable>
    <UITableBody>
      <UITableRow>
        <UITableCell>SpongeBob</UITableCell>
        <UITableCell>124 Conch Street</UITableCell>
      </UITableRow>
    </UITableBody>
  </UITable>
</UITableContainer>
```

<LivePreview>
  <TableBodyExample />
</LivePreview>

## Table Row

The `UITableRow` maps to the `tr` element and just apply minimum text styles. This is where you place table cells.

```vue-html
<UITableContainer>
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
</UITableContainer>
```

<LivePreview>
  <TableRowExample />
</LivePreview>

## Table Cell

The `UITableCell` is responsible for the `td` element and also just apply bare minimum styles. This is the smaller piece of a table and you should put all your data inside it.

```vue-html
<UITableContainer>
  <UITable>
    <UITableBody>
      <UITableRow>
        <UITableCell>SpongeBob</UITableCell>
        <UITableCell>124 Conch Street</UITableCell>
      </UITableRow>
    </UITableBody>
  </UITable>
</UITableContainer>
```

<LivePreview>
  <TableCellExample />
</LivePreview>

## Table Footer

The `UITableFooter` with it's name may trick some into placing it inside the `UITable` component but, for flexibility, it sits outside of the `UITable` but still inside of the `UITableContainer`.

In the vast majority of the cases where this component is needed, is to offer a `UIPagination` component for the table.

Read [Pagination](../pagination/) docs for more.

```vue-html
<UITableContainer>
  <UITable></UITable>
  <UITableFooter>
    <UIPagination :total-results="1" :results-per-page="1" :on-change="() => {}" label="Table navigation" />
  </UITableFooter>
</UITableContainer>
```

<LivePreview>
  <TableFooterExample />
</LivePreview>
