export const baseCode = `<UILabel>
  <span>Requested Limit</span>
  <UISelect class="mt-1">
    <option>$1,000</option>
    <option>$5,000</option>
  </UISelect>
</UILabel>`;

export const multipleCode = `<UILabel>
  <span>Multiselect</span>
  <UISelect class="mt-1" multiple>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
    <option>Option 4</option>
    <option>Option 5</option>
  </UISelect>
</UILabel>`;

export const disabledCode = `<UISelect disabled>
  <option>$1,000</option>
  <option>$5,000</option>
</UISelect>`;

export const validCode = `<UISelect valid>
  <option>$1,000</option>
  <option>$5,000</option>
</UISelect>`;

export const invalidCode = `<UISelect :valid="false">
  <option>$1,000</option>
  <option>$5,000</option>
</UISelect>`;

export const props = [
  {
    prop: 'disabled',
    description: 'apply disabled styles to the select',
    types: ['boolean'],
    defaultValue: '',
  },
  {
    prop: 'valid',
    description: '	apply valid or invalid styles to the select',
    types: ['boolean'],
    defaultValue: '',
  },
  {
    prop: 'multiple',
    description: '	create a multi option select',
    types: ['boolean'],
    defaultValue: '',
  },
];
