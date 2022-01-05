<template>
  <div>
    <Example :code="code">
      <UILabel radio>
        <UIInput v-model="radio" type="radio" />
        <span class="ml-2">Radio label</span>
      </UILabel>
      <UILabel check>
        <UIInput v-model="check" type="checkbox" />
        <span class="ml-2">Checkbox label</span>
      </UILabel>
    </Example>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { checkRadioCode } from './code';

export default defineComponent({
  setup() {
    return {
      code: checkRadioCode,
      check: ref(false),
      radio: ref(false),
    };
  },
});
</script>
