<template>
  <div class="flex flex-col items-center justify-center">
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
  </div>
</template>

<script setup lang="ts">
import { HeartIcon } from '@heroicons/vue/solid';
</script>
