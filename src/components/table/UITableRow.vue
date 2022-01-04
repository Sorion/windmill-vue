<template>
  <tr class="table-row">
    <slot></slot>
  </tr>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UITableRow'
});
</script>

<style lang="postcss" scoped>
.table-row {
}
</style>
