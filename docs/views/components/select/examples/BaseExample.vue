<template>
  <div>
    <Example :code="code">
      <UILabel>
        <span>Requested Limit</span>
        <UISelect class="mt-1">
          <option>$1,000</option>
          <option>$5,000</option>
        </UISelect>
      </UILabel>
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
