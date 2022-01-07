export const sizeCode = `<UIAvatar size="large" src="/img/avatar-1.jpg" alt="Judith" />
<UIAvatar src="/img/avatar-1.jpg" alt="Judith" />
<UIAvatar size="small" src="/img/avatar-1.jpg" alt="Judith" />`;

export const imageCode = '<UIAvatar src="/img/avatar-1.jpg" alt="Judith" />';

export const alternateCode = '<UIAvatar src="/img/avatar-2.jpg" alt="George" />';

export const props = [
  {
    prop: 'size',
    description: 'define the size of component',
    types: ['large', 'regular', 'small'],
    defaultValue: 'regular',
  },
  {
    prop: 'src',
    description: 'define the src of the image',
    types: ['string'],
    defaultValue: '',
  },
  {
    prop: 'alt',
    description: 'alternate text of the image',
    types: ['string'],
    defaultValue: '',
  },
];
