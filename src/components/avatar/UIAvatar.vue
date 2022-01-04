<template>
  <div class="avatar" :class="classSize">
    <img class="image" :src="src" :alt="alt" />
    <div class="absolute inset-0 rounded-full shadow-inner" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'UIAvatar',
  props: {
    size: { type: String, default: 'regular' },
    src: { type: String, required: true },
    alt: { type: String, required: true }
  },
  setup(props) {
    const classSize = computed(() => {
      return {
        large: props.size === 'large',
        regular: props.size === 'regular',
        small: props.size === 'small'
      };
    });

    return {
      classSize
    };
  }
});
</script>

<style lang="postcss" scoped>
.avatar {
  @apply relative rounded-full inline-block;
}

.avatar.large {
  @apply w-10 h-10;
}

.avatar.regular {
  @apply w-8 h-8;
}

.avatar.small {
  @apply w-6 h-6;
}

.image {
  @apply object-cover w-full h-full rounded-full;
}
</style>
