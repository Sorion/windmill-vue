<template>
  <section>
    <h1 class="mb-4">Import</h1>
    <CodeBlock class="mb-8">
      import { UITableContainer, UITable, UITableHeader, UITableBody, UITableRow, UITableCell } from
      '@sorion/windmill-vue'
    </CodeBlock>

    <h1 class="mb-4">Complete example</h1>
    <p class="mb-4">I think you'll understand better the following sections with a complete, contextualized example.</p>
    <CompleteExample class="mb-8" />

    <h1 class="mb-4">Table Container</h1>
    <p class="mb-4">
      The <AccentSpan>UITableContainer</AccentSpan> is responsible for containing the entire table inside borders and
      keeps it responsible. In smaller screens, the table will gently show a horizontal scroll.
    </p>
    <TableContainerExample class="mb-8" />

    <h1 class="mb-4">Table</h1>
    <p class="mb-4">
      The <AccentSpan>UITable</AccentSpan> is exaclty the table element, just the necessary for it to work well inside
      the container.
    </p>
    <TableExample class="mb-8" />

    <h1 class="mb-4">Table Header</h1>
    <p class="mb-4">
      The <AccentSpan>UITableHeader</AccentSpan> is the <AccentSpan>thead</AccentSpan> element with specific styles
      added to create a unique header for tables. This is where you place column titles.
    </p>
    <TableHeaderExample class="mb-8" />

    <h1 class="mb-4">Table Body</h1>
    <p class="mb-4">
      The <AccentSpan>UITableBody</AccentSpan> is the <AccentSpan>tbody</AccentSpan> element with specific styles added
      to create unique table styles, like the division between rows. This is where you place general table data rows.
    </p>
    <TableBodyExample class="mb-8" />

    <h1 class="mb-4">Table Row</h1>
    <p class="mb-4">
      The <AccentSpan>UITableRow</AccentSpan> maps to the <AccentSpan>tr</AccentSpan> element and just apply minimum
      text styles. This is where you place table cells.
    </p>
    <TableRowExample class="mb-8" />

    <h1 class="mb-4">Table Cell</h1>
    <p class="mb-4">
      The <AccentSpan>UITableCell</AccentSpan> is responsible for the <AccentSpan>td</AccentSpan> element and also just
      apply bare minimum styles. This is the smaller piece of a table and you should put all your data inside it.
    </p>
    <TableCellExample class="mb-8" />

    <h1 class="mb-4">Table Footer</h1>
    <p class="mb-4">
      The <AccentSpan>UITableFooter</AccentSpan> with it's name may trick some into placing it inside the
      <AccentSpan>UITable</AccentSpan> component but, for flexibility, it sits outside of the
      <AccentSpan>UITable</AccentSpan> but still inside of the <AccentSpan>UITableContainer</AccentSpan>.
    </p>

    <p class="mb-4">
      In the vast majority of the cases where this component is needed, is to offer a
      <AccentSpan>UIPagination</AccentSpan> component for the table.
    </p>

    <p class="mb-4">Read <AccentSpan>UIPagination</AccentSpan> docs for more.</p>
    <TableFooterExample class="mb-8" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import {
  CompleteExample,
  TableContainerExample,
  TableExample,
  TableHeaderExample,
  TableBodyExample,
  TableRowExample,
  TableCellExample,
  TableFooterExample,
} from './examples';

export default defineComponent({
  components: {
    CompleteExample,
    TableContainerExample,
    TableExample,
    TableHeaderExample,
    TableBodyExample,
    TableRowExample,
    TableCellExample,
    TableFooterExample,
  },
});
</script>
