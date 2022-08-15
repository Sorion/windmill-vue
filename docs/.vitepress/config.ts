import { DefaultTheme, defineConfig } from 'vitepress';

const nav: DefaultTheme.NavItem[] = [
  {
    text: 'Documentation',
    link: '/documentation/introduction',
    activeMatch: '/documentation/',
  },
];

const sidebar: DefaultTheme.Sidebar = [
  {
    text: 'Getting started',
    items: [
      { text: 'Introduction', link: '/documentation/introduction' },
      { text: 'Installation', link: '/documentation/installation' },
    ],
  },
  {
    text: 'Components',
    items: [
      { text: 'Alert', link: '/documentation/alert/' },
      { text: 'Avatar', link: 'documentation/avatar/' },
      { text: 'Backdrop', link: 'documentation/backdrop/' },
      { text: 'Badge', link: 'documentation/badge/' },
      { text: 'Button', link: 'documentation/button/' },
      { text: 'Card', link: 'documentation/card/' },
      { text: 'Dropdown', link: 'documentation/dropdown/' },
      { text: 'Helper text', link: 'documentation/helper-text/' },
      { text: 'Input', link: 'documentation/input/' },
      { text: 'Label', link: 'documentation/label/' },
      { text: 'Modal', link: 'documentation/modal/' },
      { text: 'Pagination', link: 'documentation/pagination/' },
      { text: 'Select', link: 'documentation/select/' },
      { text: 'Table', link: 'documentation/table/' },
      { text: 'Textarea', link: 'documentation/textarea/' },
      { text: 'Windmill', link: 'documentation/windmill/' },
    ],
  },
];

export default defineConfig({
  lang: 'en-US',
  title: 'Windmill Vue',
  description: 'Vue 3 components library made with tailwind, inspired by Windmill React UI',
  scrollOffset: 'header',
  themeConfig: {
    nav,
    sidebar,
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Sorion/windmill-vue',
      },
    ],
    footer: {
      copyright: `Copyright © 2021-${new Date().getFullYear()} Maxime Pelte`,
    },
  },
});
