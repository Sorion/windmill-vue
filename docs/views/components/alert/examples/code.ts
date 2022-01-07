export const typeCode = `<UIAlert>Lorem ipsum dolor sit</UIAlert>
<UIAlert type="success">Lorem ipsum dolor sit</UIAlert>
<UIAlert type="danger">Lorem ipsum dolor sit</UIAlert>
<UIAlert type="warning">Lorem ipsum dolor sit</UIAlert>
<UIAlert type="info">Lorem ipsum dolor sit</UIAlert>
<UIAlert type="neutral">Lorem ipsum dolor sit</UIAlert>`;

export const closeCode = `<UIAlert type="success" :on-close="() => {}">
Lorem ipsum
</UIAlert>`;

export const props = [
  {
    prop: 'type',
    description: 'define the style of component',
    types: ['success', 'danger', 'warning', 'info', 'neutral'],
    defaultValue: 'neutral',
  },
  {
    prop: 'onClose',
    description: 'if present, shows a close button and executes a function',
    types: ['function'],
    defaultValue: '',
  },
];
