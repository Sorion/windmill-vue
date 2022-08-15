<template>
  <div class="live-h live-v">
    <UIButton :icon-right="HeartIcon">Icon right</UIButton>
    <UIButton :icon-left="HeartIcon">Icon left</UIButton>
    <UIButton :icon-left="HeartIcon" :icon-right="PencilIcon">Two icons</UIButton>
    <UIButton :icon="HeartIcon" aria-label="Like" />
    <UIButton :icon="HeartIcon" layout="link" aria-label="Like" />
    <UIButton :icon="HeartIcon" layout="outline" aria-label="Like" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { HeartIcon, PencilIcon } from '@heroicons/vue/solid';

export default defineComponent({
  setup() {
    return {
      HeartIcon: HeartIcon,
      PencilIcon: PencilIcon,
    };
  },
});
</script>
