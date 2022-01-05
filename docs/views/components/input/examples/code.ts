export const baseCode = `<UIInput />
<UIInput aria-label="Bad" placeholder="Prefer a UILabel" />
<UILabel>
  <span>Better to use a label</span>
  <UIInput class="mt-1" />
</UILabel>`;

export const disabledCode = '<UIInput disabled />';

export const validCode = '<UIInput valid />';

export const invalidCode = '<UIInput :valid="false" />';

export const labelCode = `<UILabel>
<UIInput type="text" />
<UIHelperText>Password should have more than 6 characters</UIHelperText>
</UILabel>
<UILabel>
<UIInput type="text" valid />
<UIHelperText valid>Your password is strong</UIHelperText>
</UILabel>
<UILabel>
<UIInput type="text" :valid="false" />
<UIHelperText :valid="false">Provide a valid email</UIHelperText>
</UILabel>`;

export const radioCode = `<UIInput type="radio" />
<UIInput type="radio" checked />
<div>
<UILabel radio>
  <UIInput type="radio" />
  <span class="ml-2">Go to UILabel to read more</span>
</UILabel>
</div>`;

export const checkboxCode = `<UIInput type="checkbox" />
<UIInput type="checkbox" checked />
<div>
<UILabel check>
  <UIInput type="checkbox" />
  <span class="ml-2">Go to UILabel to read more</span>
</UILabel>
</div>`;

export const props = [
  {
    prop: 'type',
    description: 'define the type of the input. See Textarea for textareas',
    types: ['string'],
    defaultValue: 'text',
  },
  {
    prop: 'disabled',
    description: 'apply disabled styles to the input',
    types: ['boolean'],
    defaultValue: '',
  },
  {
    prop: 'valid',
    description: '	apply valid or invalid styles to the input',
    types: ['boolean'],
    defaultValue: '',
  },
];
