<template>
  <UIInput v-model="text" valid />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const text = ref('');
</script>
