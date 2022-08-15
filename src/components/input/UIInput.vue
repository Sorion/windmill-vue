<template>
  <input v-model="update" :class="baseClassName" :type="type" :disabled="disabled" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'UIInput',
  props: {
    modelValue: { type: [String, Number, Boolean, Array], required: true },
    valid: { type: Boolean, default: null },
    disabled: { type: Boolean, default: false },
    type: { type: String, default: 'text' },
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

    const baseClassName = computed(() => {
      return {
        'radio-style': props.type === 'radio',
        'checkbox-style': props.type === 'checkbox',
        'input-base':
          props.type === 'text' || props.type === 'email' || props.type === 'password' || props.type === 'number',
        active: !hasValid() && !props.disabled,
        disabled: !hasValid() && props.disabled,
        valid: hasValid() && props.valid === true,
        invalid: hasValid() && props.valid === false,
      };
    });
    return {
      baseClassName,
      update,
    };
  },
});
</script>

<style lang="postcss" scoped>
.input-base {
  @apply block w-full text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md form-input;
}

.active {
  @apply focus:border-purple-400 border-solid border-gray-300 dark:border-gray-600 focus:ring focus:ring-purple-300 dark:focus:border-gray-600 dark:focus:ring-gray-300 dark:bg-gray-700;
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

.radio-style {
  @apply text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-offset-0 dark:focus:ring-gray-300;
}

.checkbox-style {
  @apply text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-offset-0 rounded dark:focus:ring-gray-300;
}
</style>
