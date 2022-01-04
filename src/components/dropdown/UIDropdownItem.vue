<template>
  <li class="mb-2 last:mb-0">
    <UIButton layout="__dropdownItem" :class="className">
      <slot></slot>
    </UIButton>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import UIButton from '../button';

export default defineComponent({
  name: 'UIDropdownItem',
  components: {
    UIButton
  },
  props: {
    className: { type: String, required: false, default: '' }
  }
});
</script>
