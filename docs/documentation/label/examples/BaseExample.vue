<template>
  <UILabel>
    <span>Name</span>
    <UIInput v-model="text" class="mt-1" />
  </UILabel>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const text = ref('');
</script>
