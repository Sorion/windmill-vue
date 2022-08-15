<template>
  <div class="alert" :class="className" role="alert">
    <component :is="iconComponent" class="icon" :class="className" />
    <slot></slot>
    <button v-if="onClose" class="button-close" :class="className" @click="handleClose">
      <svg class="h-5 w-5" :class="className" fill="currentColor" viewBox="0 0 20 20" role="img" aria-hidden="true">
        <path
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
          fillRule="evenodd"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { InfoIcon, SuccessIcon, DangerIcon, WarningIcon, NeutralIcon } from '../icons';

export default defineComponent({
  name: 'UIAlert',
  props: {
    type: { type: String, default: 'neutral' },
    // eslint-disable-next-line vue/require-default-prop
    onClose: { type: Function, required: false },
  },
  setup(props) {
    const handleClose = () => {
      if (props.onClose) {
        props.onClose();
      }
    };
    const className = computed(() => {
      return {
        neutral: props.type === 'neutral',
        success: props.type === 'success',
        danger: props.type === 'danger',
        warning: props.type === 'warning',
        info: props.type === 'info',
      };
    });

    const iconComponent = computed(() => {
      let icon = NeutralIcon;
      switch (props.type) {
        case 'neutral':
          icon = NeutralIcon;
          break;
        case 'success':
          icon = SuccessIcon;
          break;
        case 'danger':
          icon = DangerIcon;
          break;
        case 'warning':
          icon = WarningIcon;
          break;
        case 'info':
          icon = InfoIcon;
          break;
        default:
          break;
      }

      return icon;
    });

    return {
      className,
      iconComponent,
      handleClose,
    };
  },
});
</script>

<style lang="postcss" scoped>
.alert {
  @apply p-4 pl-12 relative rounded-lg leading-5 text-left;
}

.alert.neutral {
  @apply bg-gray-50 text-gray-800 dark:bg-gray-700 dark:text-gray-300;
}

.alert.success {
  @apply bg-green-50 text-green-900 dark:bg-green-600 dark:text-white;
}

.alert.danger {
  @apply bg-red-50 text-red-900 dark:bg-red-600 dark:text-white;
}

.alert.warning {
  @apply bg-yellow-50 text-yellow-900 dark:bg-yellow-600 dark:text-white;
}

.alert.info {
  @apply bg-blue-50 text-blue-900 dark:bg-blue-600 dark:text-white;
}

.icon {
  @apply h-5 w-5 absolute left-0 top-0 ml-4 mt-4;
}

.success {
  @apply text-green-400 dark:text-green-300;
}

.danger {
  @apply text-red-400 dark:text-red-300;
}

.warning {
  @apply text-yellow-400 dark:text-yellow-100;
}

.neutral {
  @apply text-gray-400 dark:text-gray-500;
}

.info {
  @apply text-blue-400 dark:text-blue-300;
}

.button-close {
  @apply absolute top-0 right-0 mt-4 mr-4;
}
</style>
