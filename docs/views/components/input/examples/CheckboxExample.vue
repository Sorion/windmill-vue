<template>
  <div>
    <Example :code="code">
      <UIInput v-model="check" type="checkbox" />
      <UIInput v-model="check2" type="checkbox" checked />
      <div>
        <UILabel check>
          <UIInput v-model="check3" type="checkbox" />
          <span class="ml-2">Go to UILabel to read more</span>
        </UILabel>
      </div>
    </Example>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { checkboxCode } from './code';

export default defineComponent({
  setup() {
    return {
      code: checkboxCode,
      check: ref(false),
      check2: ref(false),
      check3: ref(false),
    };
  },
});
</script>
