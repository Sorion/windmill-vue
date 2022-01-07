<template>
  <div>
    <Example :code="code">
      <UIBadge>primary</UIBadge>
      <UIBadge type="neutral">neutral</UIBadge>
      <UIBadge type="success">success</UIBadge>
      <UIBadge type="danger">danger</UIBadge>
      <UIBadge type="warning">warning</UIBadge>
    </Example>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { typeCode } from './code';

export default defineComponent({
  setup() {
    return {
      code: typeCode,
    };
  },
});
</script>
