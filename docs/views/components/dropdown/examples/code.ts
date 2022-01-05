export const basicsCode = `<UIDropdown :is-open="true" @close="() => {}">
<UIDropdownItem  class="justify-between">
  <span>Messages</span>
  <UIBadge type="danger">13</UIBadge>
</UIDropdownItem>
<UIDropdownItem @click="() => alert('Alerts!')">
  <span>Alerts</span>
</UIDropdownItem>
</UIDropdown>`;

export const alignCode = `<UIDropdown align="right" :is-open="true" @close="() => {}">
<UIDropdownItem  class="justify-between">
  <span>Messages</span>
  <UIBadge type="danger">13</UIBadge>
</UIDropdownItem>
<UIDropdownItem @click="() => alert('Alerts!')">
  <span>Alerts</span>
</UIDropdownItem>
</UIDropdown>`;

export const openCode = `<UIDropdown :is-open="true" @close="() => {}">
...
</UIDropdown>`;

export const dropdownCode = `<UIDropdownItem  class="justify-between">
  <span>Messages</span>
<UIBadge type="danger">13</UIBadge>
</UIDropdownItem>
<UIDropdownItem @lick="() => alert('Alerts!')">
  <span>Alerts</span>
</UIDropdownItem>`;

export const completeCode = `<template>
  <div class="relative">
    <UIButton @click="handleOpen">Open dropdown</UIButton>
    <UIDropdown :is-open="isOpen" @close="isOpen = false">
      <UIDropdownItem  class="justify-between">
        <span>Messages</span>
        <UIBadge type="danger">13</UIBadge>
      </UIDropdownItem>
      <UIDropdownItem @click="handleAlert()">
        <span>Alerts</span>
      </UIDropdownItem>
    </UIDropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
setup() {
  const isOpen = ref(false);
  const handleOpen = () => {
    isOpen.value = !isOpen.value;
  };
  const handleAlert = () => {
    alert('Alert!');
  };

  return {
    isOpen,
    handleOpen,
    handleAlert,
  };
},
});
</script>
`;

export const props = [
  {
    prop: 'align',
    description: "define the alignment of the dropdown, relative to it's parent",
    types: ['left', 'right'],
    defaultValue: 'left',
  },
  {
    prop: 'isOpen',
    description: 'define if the dropdown is visible',
    types: ['boolean'],
    defaultValue: '',
  },
];
