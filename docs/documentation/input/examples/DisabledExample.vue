<template>
  <UIInput v-model="text" disabled />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const text = ref('');
</script>
