<template>
  <UIButton size="small" layout="link" :icon="icon" :disabled="disabled" :aria-label="ariaLabel"></UIButton>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

import UIButton from '../button';
import { NextIcon, PrevIcon } from '../icons';

export default defineComponent({
  name: 'UINavigationButton',
  components: {
    UIButton
  },
  props: {
    onClick: { type: Function, required: true },
    disabled: { type: Boolean, required: true },
    directionIcon: { type: String, required: true }
  },
  setup(props) {
    const icon = computed(() => (props.directionIcon === 'prev' ? PrevIcon : NextIcon));
    const ariaLabel = ref(props.directionIcon === 'prev' ? 'Previous' : 'Next');

    return {
      ariaLabel,
      icon
    };
  }
});
</script>
