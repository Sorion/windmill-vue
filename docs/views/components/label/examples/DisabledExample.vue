<template>
  <div>
    <Example :code="code">
      <UILabel radio disabled>
        <UIInput v-model="radio" type="radio" />
        <span class="ml-2">Disabled radio label</span>
      </UILabel>
      <UILabel check disabled>
        <UIInput v-model="check" type="checkbox" />
        <span class="ml-2">Disabled checkbox label</span>
      </UILabel>
      <UILabel disabled>
        <span>Name</span>
        <UIInput v-model="text" class="mt-1" />
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
      text: ref(''),
    };
  },
});
</script>
