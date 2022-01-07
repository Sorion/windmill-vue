<template>
  <div>
    <h1 class="mb-4">Getting started</h1>
    <p class="mb-4">
      Windmill React UI is a component library based on Tailwind CSS, that goes beyond usual libraries. Additionally,
      Winbdmill Vue UI provide a dark theme mode with one prop.
    </p>

    <UIAlert type="info">You can click the "moon" icon to preview the dark theme on example.</UIAlert>

    <Example :code="code" language="language-html" class="mb-10">
      <nav class="flex items-center justify-between px-6 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 shadow-lg">
        <a class="text-gray-700 dark:text-gray-400" href="#">
          <!-- From HeroIcons -->
          <ChatAlt2Icon class="w-6 h-6 text-purple-600" />
        </a>
        <ul class="flex space-x-4">
          <li>
            <UIButton layout="link">Products</UIButton>
          </li>
          <li>
            <UIButton layout="link">Contact</UIButton>
          </li>
          <li>
            <UIButton>Login</UIButton>
          </li>
        </ul>
      </nav>
    </Example>

    <h2 class="font-bold text-xl mt-20 mb-4">Composable</h2>
    <p class="mb-4">
      You have unlimited options combining components together, and you still have the power of using Tailwind to
      customize every little detail of any component.
    </p>
    <Example :code="composable" class="mb-6">
      <UICard class="max-w-md">
        <UICardBody>
          <div class="flex">
            <UIAvatar size="large" src="/img/avatar-1.jpg" alt="Judith" />
            <div class="ml-2">
              <p class="font-semibold dark:text-gray-300">Judith Ipsum</p>
              <p class="text-xs text-gray-500">@judithipsum</p>
            </div>
          </div>
          <p class="my-2 dark:text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum commodi a omnis numquam quod? Totam
            exercitationem quos hic ipsam at qui cum numquam, sed amet ratione! Ratione, nihil dolorum.
          </p>
          <div class="flex items-end justify-between">
            <div>
              <UIBadge type="neutral">#tailwindcss</UIBadge>
              <UIBadge type="neutral" class="ml-2"> #vue </UIBadge>
            </div>
            <div>
              <UIButton size="small" :icon="HeartIcon" layout="link" aria-label="Like" />
              <UIButton size="small" class="ml-2"> Read more </UIButton>
            </div>
          </div>
        </UICardBody>
      </UICard>
    </Example>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import { ChatAlt2Icon, HeartIcon } from '@heroicons/vue/solid';

const code = `<nav class="flex items-center justify-between px-6 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 shadow-lg">
  <a class="text-gray-700 dark:text-gray-400" href="#">
    <!-- From HeroIcons -->
    <ChatAlt2Icon class="w-6 h-6 text-purple-600" />
  </a>
  <ul class="flex space-x-4">
    <li>
      <UIButton layout="link">Products</UIButton>
    </li>
    <li>
      <UIButton layout="link">Contact</UIButton>
    </li>
    <li>
      <UIButton>Login</UIButton>
    </li>
  </ul>
</nav>`;

const composable = `<UICard class="max-w-md">
  <UICardBody>
    <div class="flex">
      <UIAvatar size="large" src="/img/avatar-1.jpg" alt="Judith" />
      <div class="ml-2">
        <p class="font-semibold dark:text-gray-300">Judith Ipsum</p>
        <p class="text-xs text-gray-500">@judithipsum</p>
      </div>
    </div>
    <p class="my-2 dark:text-gray-300">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum commodi a omnis numquam quod? Totam
      exercitationem quos hic ipsam at qui cum numquam, sed amet ratione! Ratione, nihil dolorum.
    </p>
    <div class="flex items-end justify-between">
      <div>
        <UIBadge type="neutral">#tailwindcss</UIBadge>
        <UIBadge type="neutral" class="ml-2"> #vue </UIBadge>
      </div>
      <div>
        <UIButton size="small" :icon="HeartIcon" layout="link" aria-label="Like" />
        <UIButton size="small" class="ml-2"> Read more </UIButton>
      </div>
    </div>
  </UICardBody>
</UICard>`;

export default defineComponent({
  name: 'Description',
  components: {
    ChatAlt2Icon,
  },
  setup() {
    return {
      code: code,
      HeartIcon: HeartIcon,
      composable: composable,
    };
  },
});
</script>
