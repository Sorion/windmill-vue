<template>
  <div>
    <Example :code="code">
      <UIInput v-model="text" />
      <UIInput v-model="text2" aria-label="Bad" placeholder="Prefer a UILabel" />
      <UILabel>
        <span>Better to use a label</span>
        <UIInput v-model="text3" class="mt-1" />
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
      text2: ref(''),
      text3: ref(''),
    };
  },
});
</script>
