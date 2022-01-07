<template>
  <div>
    <Example :code="code">
      <UIPagination :total-results="120" :results-per-page="10" :on-change="() => {}" label="Page navigation" />
    </Example>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { baseCode } from './code';

export default defineComponent({
  setup() {
    return {
      code: baseCode,
    };
  },
});
</script>
