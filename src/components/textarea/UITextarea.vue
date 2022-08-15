<template>
  <textarea v-model="update" class="textarea-base" :class="className" :disabled="disabled"> </textarea>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'UITextarea',
  props: {
    modelValue: { type: String, required: true },
    disabled: { type: Boolean, default: false },
    valid: { type: Boolean, default: null },
  },
  emits: ['update:modelValue'],
  setup(props, context) {
    const hasValid = () => {
      return props.valid !== null;
    };

    const update = computed({
      get: () => {
        return props.modelValue;
      },
      set: (value) => {
        context.emit('update:modelValue', value);
      },
    });

    const className = computed(() => {
      return {
        active: !hasValid() && !props.disabled,
        disabled: !hasValid() && props.disabled,
        valid: hasValid() && props.valid,
        invalid: hasValid() && props.valid === false,
      };
    });

    return {
      className,
      update,
    };
  },
});
</script>

<style lang="postcss" scoped>
.textarea-base {
  @apply block form-textarea w-full text-sm dark:text-gray-300 rounded-md focus:outline-none;
}

.active {
  @apply focus:border-purple-400 border-solid border-gray-300 dark:border-gray-600 dark:focus:border-gray-600 dark:bg-gray-700 dark:focus:ring-gray-300 focus:ring focus:ring-purple-300;
}

.disabled {
  @apply cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800;
}

.valid {
  @apply border-solid border-green-600 dark:bg-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:ring focus:ring-green-200 dark:focus:ring-green-200;
}

.invalid {
  @apply border-solid border-red-600 dark:bg-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring focus:ring-red-200 dark:focus:ring-red-200;
}
</style>
