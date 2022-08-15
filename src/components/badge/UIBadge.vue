<template>
  <span class="badge" :class="className"><slot></slot></span>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'UIBadge',
  props: { type: { type: String, default: 'primary' } },
  setup(props) {
    const className = computed(() => {
      return {
        primary: props.type === 'primary',
        neutral: props.type === 'neutral',
        success: props.type === 'success',
        danger: props.type === 'danger',
        warning: props.type === 'warning',
      };
    });

    return {
      className,
    };
  },
});
</script>

<style lang="postcss" scoped>
.badge {
  @apply inline-flex px-2 text-xs font-medium leading-5 rounded-full;
}

.badge.primary {
  @apply text-purple-700 bg-purple-100 dark:text-white dark:bg-purple-600;
}

.badge.neutral {
  @apply text-gray-700 bg-gray-100 dark:text-gray-100 dark:bg-gray-700;
}

.badge.success {
  @apply text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100;
}

.badge.danger {
  @apply text-red-700 bg-red-100 dark:text-red-100 dark:bg-red-700;
}

.badge.warning {
  @apply text-orange-700 bg-orange-100 dark:text-white dark:bg-orange-600;
}
</style>
