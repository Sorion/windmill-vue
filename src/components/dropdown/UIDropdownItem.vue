<template>
  <li class="mb-2 last:mb-0">
    <UIButton layout="__dropdownItem" :class="className">
      <slot></slot>
    </UIButton>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UIDropdownItem',
  props: {
    className: { type: String, required: false, default: '' },
  },
});
</script>
