<template>
  <div>
    <Example :code="code">
      <UIInput v-model="radio" type="radio" />
      <UIInput v-model="radio2" type="radio" checked />
      <div>
        <UILabel radio>
          <UIInput v-model="radio3" type="radio" />
          <span class="ml-2">Go to UILabel to read more</span>
        </UILabel>
      </div>
    </Example>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { radioCode } from './code';

export default defineComponent({
  setup() {
    return {
      code: radioCode,
      radio: ref(false),
      radio2: ref(false),
      radio3: ref(false),
    };
  },
});
</script>
