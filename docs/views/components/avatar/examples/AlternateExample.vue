<template>
  <div>
    <Example :code="code">
      <UIAvatar src="/img/avatar-2.jpg" alt="George" />
    </Example>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { alternateCode } from './code';

export default defineComponent({
  setup() {
    return {
      code: alternateCode,
    };
  },
});
</script>
