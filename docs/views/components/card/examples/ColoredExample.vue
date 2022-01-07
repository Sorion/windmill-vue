<template>
  <div>
    <Example :code="code">
      <UICard colored class="bg-purple-600">
        <UICardBody>
          <p class="mb-4 font-semibold text-white">Revenue</p>
          <p class="text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum commodi a omnis numquam quod? Totam
            exercitationem quos hic ipsam at qui cum numquam, sed amet ratione! Ratione, nihil dolorum.
          </p>
        </UICardBody>
      </UICard>
    </Example>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { coloredCode } from './code';

export default defineComponent({
  setup() {
    return {
      code: coloredCode,
    };
  },
});
</script>
