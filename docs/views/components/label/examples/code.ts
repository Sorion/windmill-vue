export const baseCode = `<UILabel>
  <span>Name</span>
  <UIInput class="mt-1" />
</UILabel>`;

export const checkRadioCode = `<UILabel radio>
<UIInput type="radio" />
  <span class="ml-2">Radio label</span>
</UILabel>
<UILabel check>
  <UIInput type="checkbox" />
  <span class="ml-2">Checkbox label</span>
</UILabel>`;

export const disabledCode = `<UILabel radio disabled>
<UIInput type="radio" />
  <span class="ml-2">Disabled radio label</span>
</UILabel>
<UILabel check disabled>
  <UIInput type="checkbox" />
  <span class="ml-2">Disabled checkbox label</span>
</UILabel>
<UILabel disabled>
  <span>Name</span>
  <UIInput class="mt-1" />
</UILabel>`;

export const props = [
  {
    prop: 'check',
    description: 'apply layout styles to the labels of checkbox inputs',
    types: ['boolean'],
    defaultValue: '',
  },
  {
    prop: 'radio',
    description: 'apply layout styles to the labels of radio inputs',
    types: ['boolean'],
    defaultValue: '',
  },
  {
    prop: 'disabled',
    description: 'apply disabled styles to the label',
    types: ['boolean'],
    defaultValue: '',
  },
];
