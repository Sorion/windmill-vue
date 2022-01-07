export const typeCode = `<UIBadge>primary</UIBadge>
<UIBadge type="neutral">neutral</UIBadge>
<UIBadge type="success">success</UIBadge>
<UIBadge type="danger">danger</UIBadge>
<UIBadge type="warning">warning</UIBadge>`;

export const props = [
  {
    prop: 'type',
    description: 'define the color of component',
    types: ['success', 'primary', 'danger', 'warning', 'neutral'],
    defaultValue: 'neutral',
  },
];
