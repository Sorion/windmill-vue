<template>
  <div>
    <Example :code="code">
      <UILabel>
        <span>Message</span>
        <UITextarea class="mt-1" rows="3" placeholder="Enter some long form content." />
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
