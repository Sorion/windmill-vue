<template>
  <span class="helper-text" :class="className"><slot></slot></span>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'UIHelperText',
  props: {
    valid: { type: Boolean, required: false, default: undefined }
  },
  setup(props) {
    const className = computed(() => {
      if (props.valid === undefined) {
        return {};
      }

      return {
        valid: props.valid,
        invalid: !props.valid && props.valid !== undefined
      };
    });

    return {
      className
    };
  }
});
</script>

<style lang="postcss" scoped>
.helper-text {
  @apply text-xs dark:text-gray-400;
}

.valid {
  @apply text-green-600 dark:text-green-400;
}

.invalid {
  @apply text-red-600 dark:text-red-400;
}
</style>
