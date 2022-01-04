<template>
  <label :class="className">
    <slot></slot>
  </label>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'UILabel',
  props: {
    check: { type: Boolean, default: false },
    radio: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  setup(props) {
    const className = computed(() => {
      return {
        'label-base': true,
        check: props.check || props.radio,
        disabled: props.disabled
      };
    });

    return {
      className
    };
  }
});
</script>

<style lang="postcss" scoped>
.label-base {
  @apply block text-sm text-gray-700 dark:text-gray-400;
}

.check {
  @apply inline-flex items-center;
}

.disabled {
  @apply opacity-50 cursor-not-allowed;
}
</style>
