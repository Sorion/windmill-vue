<template>
  <div>
    <Example :code="code">
      <UICard class="flex h-48">
        <img class="object-cover w-1/3" src="/docs/assets/img/forest.jpeg" />
        <UICardBody>
          <p class="mb-4 font-semibold text-gray-600 dark:text-gray-300">Revenue</p>
          <p class="text-gray-600 dark:text-gray-400">
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

import { cardbodyCode } from './code';

export default defineComponent({
  setup() {
    return {
      code: cardbodyCode,
    };
  },
});
</script>
