<template>
  <div>
    <Example :code="code">
      <UILabel>
        <span>Name</span>
        <UIInput v-model="text" class="mt-1" />
      </UILabel>
    </Example>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { baseCode } from './code';

export default defineComponent({
  setup() {
    return {
      code: baseCode,
      text: ref(''),
    };
  },
});
</script>
