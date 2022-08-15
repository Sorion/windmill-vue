<template>
  <transition name="slide-fade">
    <div v-if="isOpen">
      <FocusLock return-focus>
        <ul ref="dropdownRef" class="dropdown-container" :class="leftRightClass" aria-label="submenu">
          <slot></slot>
        </ul>
      </FocusLock>
    </div>
  </transition>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';
import FocusLock from '../focus-lock/FocusLock.vue';

export default defineComponent({
  name: 'UIDropdown',
  components: { FocusLock },
  props: {
    isOpen: { type: Boolean, required: true },
    align: { type: String, required: false, default: 'left' },
  },
  emits: ['close'],
  setup(props, context) {
    const dropdownRef = ref(null);
    const leftRightClass = computed(() => {
      return {
        'left-0': props.align === 'left',
        'right-0': props.align === 'right',
      };
    });
    const emitClose = () => {
      context.emit('close');
    };
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Esc' || event.key === 'Escape') {
        emitClose();
      }
    };
    const handleClickOutside = (event: MouseEvent) => {
      const dropElement = dropdownRef.value as unknown as HTMLElement;
      if (dropElement && !dropElement.contains(event.target as Node)) {
        emitClose();
      }
    };
    watch(
      () => props.isOpen,
      (state) => {
        if (state) {
          document.addEventListener('click', handleClickOutside, { capture: true });
          document.addEventListener('keydown', handleEsc, { capture: true });
        } else {
          document.removeEventListener('click', handleClickOutside);
          document.removeEventListener('keydown', handleEsc);
        }
      },
      {
        flush: 'post',
      }
    );
    return {
      leftRightClass,
      dropdownRef,
    };
  },
});
</script>

<style lang="postcss" scoped>
.dropdown-container {
  @apply absolute z-50 list-none w-56 p-2 mt-2 text-gray-600 bg-white border border-gray-100 rounded-lg shadow-md min-w-max dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active,
.slide-fade-leave-active {
  @apply transition ease-out duration-150;
}

.slide-fade-enter-to {
  @apply opacity-100;
}
.slide-fade-leave-to {
  @apply opacity-0;
}
</style>
