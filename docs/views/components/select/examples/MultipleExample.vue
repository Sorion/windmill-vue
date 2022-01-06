<template>
  <div>
    <Example :code="code">
      <UILabel>
        <span>Multiselect</span>
        <UISelect class="mt-1" multiple>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
          <option>Option 5</option>
        </UISelect>
      </UILabel>
    </Example>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { multipleCode } from './code';

export default defineComponent({
  setup() {
    return {
      code: multipleCode,
    };
  },
});
</script>
