export const basicCode = '<UIHelperText>Password should have more than 6 characters</UIHelperText>';

export const validCode = '<UIHelperText valid>Your password is strong</UIHelperText>';

export const invalidCode = '<UIHelperText :valid="false">Provide a valid email</UIHelperText>';
export const props = [
  {
    prop: 'valid',
    description: 'apply valid or invalid styles to the input',
    types: ['boolean'],
    defaultValue: '',
  },
];
