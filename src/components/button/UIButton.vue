<template>
  <component :is="tag" :class="className" :disabled="disabled">
    <component :is="iconOnLeft" v-if="iconOnLeft !== null" :class="{ ...iconClassName, 'icon-left': hasSlot }" />
    <slot></slot>
    <component :is="iconRight" v-if="iconRight !== null" :class="{ ...iconClassName, 'icon-right': hasSlot }" />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'UIButton',
  props: {
    layout: { type: String, default: 'primary' },
    size: { type: String, default: 'regular' },
    disabled: { type: Boolean, default: false },
    block: { type: Boolean },
    tag: { type: String, default: 'button' },
    icon: { type: [Function, String], required: false, default: null },
    iconLeft: { type: [Function, String], required: false, default: null },
    iconRight: { type: [Function, String], required: false, default: null },
  },
  setup(props, context) {
    const hasSlot = computed(() => {
      return context.slots.default !== undefined;
    });

    const className = computed(() => {
      if (props.layout === '__dropdownItem') {
        return 'button-item';
      }
      return {
        'button-base': true,
        primary: props.layout === 'primary',
        'outline-style': props.layout === 'outline',
        link: props.layout === 'link',
        active: !props.disabled,
        disabled: props.disabled,
        larger: props.size === 'larger',
        large: props.size === 'large',
        regular: props.size === 'regular',
        small: props.size === 'small',
        pagination: props.size === 'pagination',
        icon: !hasSlot.value,
        block: props.block,
      };
    });

    const iconClassName = computed(() => {
      return {
        'icon-larger': props.size === 'larger',
        'icon-large': props.size === 'large',
        'icon-regular': props.size === 'regular',
        'icon-small': props.size === 'small',
      };
    });

    const iconOnLeft = computed(() => {
      return props.iconLeft || props.icon;
    });
    return {
      className,
      iconClassName,
      iconOnLeft,
      hasSlot,
    };
  },
});
</script>

<style lang="postcss" scoped>
.button-base {
  @apply align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none;
}

.button-base.block {
  @apply w-full;
}

.button-base.disabled {
  @apply cursor-not-allowed opacity-50;
}

.button-item {
  @apply inline-flex items-center cursor-pointer w-full px-2 py-1 text-sm font-medium transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200;
}

.button-base.primary {
  @apply text-white bg-purple-600 border border-solid border-transparent;
}

.primary.active {
  @apply active:bg-purple-600 hover:bg-purple-700 focus:ring focus:ring-purple-300;
}

.button-base.outline-style {
  @apply text-gray-600 border-gray-300 border border-solid dark:text-gray-400 focus:outline-none;
}

.outline-style.active {
  @apply active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:ring focus:ring-gray-300;
}

.outline-style.disabled {
  @apply bg-gray-300;
}

.button-base.link {
  @apply text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent;
}

.link.active {
  @apply active:bg-transparent hover:bg-gray-100 focus:ring focus:ring-gray-300 dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10;
}

.button-base.larger {
  @apply px-10 py-4 rounded-lg;
}

.button-base.larger.icon {
  @apply p-4 rounded-lg;
}

.button-base.large {
  @apply px-5 py-3 rounded-lg;
}

.button-base.large.icon {
  @apply p-3 rounded-lg;
}

.button-base.regular {
  @apply px-4 py-2 rounded-lg text-sm;
}

.button-base.regular.icon {
  @apply p-2 rounded-lg;
}

.button-base.small {
  @apply px-3 py-1 rounded-md text-sm;
}

.button-base.small.icon {
  @apply p-2 rounded-md;
}

.button-base.pagination {
  @apply px-3 py-1 rounded-md text-xs;
}

.icon-larger {
  @apply h-5 w-5;
}
.icon-large {
  @apply h-5 w-5;
}
.icon-regular {
  @apply h-5 w-5;
}
.icon-small {
  @apply h-3 w-3;
}
.icon-left {
  @apply mr-2 -ml-1;
}
.icon-right {
  @apply ml-2 -mr-1;
}
</style>
