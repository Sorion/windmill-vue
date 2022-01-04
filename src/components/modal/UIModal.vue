<template>
  <transition name="fade" @after-enter="handleOpen">
    <UIBackdrop v-if="enabled">
      <transition
        name="translate"
        @after-leave="
          emitClose();
          blockClose = false;
        "
      >
        <div v-if="childOpen" class="base-modal" role="dialog">
          <header class="flex justify-end">
            <button
              class="inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded dark:hover:text-gray-200 hover: hover:text-gray-700"
              aria-label="close"
              @click="handleClose"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" role="img" aria-hidden="true">
                <path
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </header>
          <slot></slot>
        </div>
      </transition>
    </UIBackdrop>
  </transition>
</template>

<script lang="ts">
import { computed, defineComponent, onUpdated, ref, watch } from 'vue';

import UIBackdrop from '../backdrop';

export default defineComponent({
  name: 'UIModal',
  components: {
    UIBackdrop
  },
  props: {
    isOpen: { type: Boolean, required: true }
  },
  emits: ['close'],
  setup(props, context) {
    const childOpen = ref(false);
    const blockClose = ref(false);

    const emitClose = () => {
      context.emit('close');
    };

    const handleClose = () => {
      childOpen.value = false;
    };

    const handleOpen = () => {
      childOpen.value = true;
      blockClose.value = true;
    };

    const enabled = computed(() => {
      if (!props.isOpen) {
        if (blockClose.value) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    });

    watch(
      () => props.isOpen,
      (value) => {
        if (!value && blockClose) {
          handleClose();
        }
      }
    );

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Esc' || event.key === 'Escape') {
        handleClose();
      }
    };
    onUpdated(() => {
      if (props.isOpen) {
        document.addEventListener('keydown', handleEsc, { capture: true });
      } else {
        document.removeEventListener('keydown', handleEsc);
      }
    });

    return {
      emitClose,
      handleClose,
      handleOpen,
      childOpen,
      blockClose,
      enabled
    };
  }
});
</script>

<style lang="postcss">
.base-modal {
  @apply w-full px-6 py-4 overflow-hidden bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-xl;
}

/* FADE ANIMATION */

.fade-enter-active {
  @apply transition ease-out duration-150;
}

.fade-leave-active {
  @apply transition ease-in duration-150;
}

.fade-enter-from {
  @apply opacity-0;
}

.fade-enter-to {
  @apply opacity-100;
}

.fade-leave-from {
  @apply opacity-100;
}

.fade-leave-to {
  @apply opacity-0;
}

/* TRANSLATE ANIMATION */

.translate-enter-active {
  @apply transition ease-out duration-150;
}

.translate-leave-active {
  @apply transition ease-in duration-150;
}

.translate-enter-from {
  @apply opacity-0 translate-y-1/2;
}

.translate-enter-to {
  @apply opacity-100;
}

.translate-leave-from {
  @apply opacity-100;
}

.translate-leave-to {
  @apply opacity-0 translate-y-1/2;
}
</style>
