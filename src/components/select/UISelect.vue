<template>
  <select :class="className" :disabled="disabled" :multiple="multiple">
    <slot></slot>
  </select>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'UISelect',
  props: {
    disabled: { type: Boolean, default: false },
    multiple: { type: Boolean, default: false },
    valid: { type: Boolean, default: null }
  },
  setup(props) {
    const hasValid = () => {
      return props.valid !== null;
    };
    const className = computed(() => {
      return {
        'select-base': true,
        active: !hasValid() && !props.disabled,
        disabled: !hasValid() && props.disabled,
        valid: hasValid() && props.valid === true,
        invalid: hasValid() && props.valid === false,
        select: props.multiple
      };
    });

    return {
      className
    };
  }
});
</script>

<style lang="postcss" scoped>
.select-base {
  @apply block w-full form-select text-sm dark:text-gray-300 focus:outline-none rounded-md;
}

.active {
  @apply focus:border-purple-400 border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring focus:ring-purple-300 dark:focus:ring-gray-300 dark:focus:border-gray-600;
}

.select {
  @apply leading-5;
}

.disabled {
  @apply cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800;
}

.valid {
  @apply border-green-600 dark:bg-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:ring focus:ring-green-200 dark:focus:ring-green-200;
}

.invalid {
  @apply border-red-600 dark:bg-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring focus:ring-red-200 dark:focus:ring-red-200;
}
</style>
