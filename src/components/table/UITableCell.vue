<template>
  <td class="table-cell"><slot></slot></td>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UITableCell'
});
</script>

<style lang="postcss" scoped>
.table-cell {
  @apply px-4 py-3;
}
</style>
