<template>
  <div>
    <Example :code="code">
      <UIButton :icon-right="HeartIcon">Icon right</UIButton>
      <UIButton :icon-left="HeartIcon">Icon left</UIButton>
      <UIButton :icon-left="HeartIcon" :icon-right="PencilIcon">Two icons</UIButton>
      <UIButton :icon="HeartIcon" aria-label="Like" />
      <UIButton :icon="HeartIcon" layout="link" aria-label="Like" />
      <UIButton :icon="HeartIcon" layout="outline" aria-label="Like" />
    </Example>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { disabledCode } from './code';
import { HeartIcon, PencilIcon } from '@heroicons/vue/solid';

export default defineComponent({
  setup() {
    return {
      code: disabledCode,
      HeartIcon: HeartIcon,
      PencilIcon: PencilIcon,
    };
  },
});
</script>
