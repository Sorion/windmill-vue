<template>
  <div class="bg-white dark:bg-[#1a1a1a] rounded-lg p-6 live">
    <UIAlert>Lorem ipsum dolor sit</UIAlert>
    <UIAlert type="success">Lorem ipsum dolor sit</UIAlert>
    <UIAlert type="danger">Lorem ipsum dolor sit</UIAlert>
    <UIAlert type="warning">Lorem ipsum dolor sit</UIAlert>
    <UIAlert type="info">Lorem ipsum dolor sit</UIAlert>
    <UIAlert type="neutral">Lorem ipsum dolor sit</UIAlert>
  </div>
</template>

<script setup lang="ts"></script>

<style type="postcss">
.live > :not(:only-child) {
  @apply mr-4 mb-4;
}
</style>
