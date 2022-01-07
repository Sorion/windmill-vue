export const baseCode = `<UILabel>
  <span>Message</span>
  <UITextarea class="mt-1" rows="3" placeholder="Enter some long form content." />
</UILabel>`;

export const disabledCode = '<UITextarea disabled rows="3" placeholder="Enter some long form content." />';

export const validCode = '<UITextarea valid rows="3" placeholder="Enter some long form content." />';

export const invalidCode = '<UITextarea :valid="false" rows="3" placeholder="Enter some long form content." />';

export const props = [
  {
    prop: 'disabled',
    description: 'apply disabled styles to the textarea',
    types: ['boolean'],
    defaultValue: '',
  },
  {
    prop: 'valid',
    description: 'apply valid or invalid styles to the textarea',
    types: ['boolean'],
    defaultValue: '',
  },
];
