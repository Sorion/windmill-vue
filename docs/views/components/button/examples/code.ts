export const sizeCode = `<UIButton size="larger">Larger</UIButton>
<UIButton size="large">Large</UIButton>
<UIButton size="regular">Regular</UIButton>
<UIButton size="small">Small</UIButton>`;

export const layoutCode = `<UIButton layout="primary">Primary</UIButton>
<UIButton layout="outline">Outline</UIButton>
<UIButton layout="link">Link</UIButton>`;

export const iconsCode = `<UIButton :iconRight="HeartIcon">Icon right</UIButton>
<UIButton :iconLeft="HeartIcon">Icon left</UIButton>
<UIButton :icon-left="HeartIcon" :icon-right="PencilIcon">Two icons</UIButton>
<UIButton :icon="HeartIcon" aria-label="Like" />
<UIButton :icon="HeartIcon" layout="link" aria-label="Like" />
<UIButton :icon="HeartIcon" layout="outline" aria-label="Like" />`;

export const disabledCode = `<UIButton disabled>Primary</UIButton>
<UIButton disabled layout="outline">Outline</UIButton>
<UIButton disabled layout="link">Link</UIButton>`;

export const blockCode = `<UIButton block>Primary</UIButton>
<UIButton block layout="outline">Outline</UIButton>
<UIButton block layout="link">Link</UIButton>`;

export const props = [
  {
    prop: 'size',
    description: 'define the size of component',
    types: ['larger', 'large', 'regular', 'small'],
    defaultValue: 'regular',
  },
  {
    prop: 'layout',
    description: 'define the layout of component',
    types: ['primary', 'outline', 'link'],
    defaultValue: 'primary',
  },
  {
    prop: 'icon',
    description: 'add an icon to the button',
    types: ['VNode'],
    defaultValue: '',
  },
  {
    prop: 'iconLeft',
    description: 'add an icon to the left of the button',
    types: ['VNode'],
    defaultValue: '',
  },
  {
    prop: 'iconRight',
    description: 'add an icon to the Right of the button',
    types: ['VNode'],
    defaultValue: '',
  },
  {
    prop: 'disabled',
    description: 'disable state of button',
    types: ['boolean'],
    defaultValue: 'false',
  },
  {
    prop: 'block',
    description: 'expand full width',
    types: ['boolean'],
    defaultValue: 'false',
  },
];
