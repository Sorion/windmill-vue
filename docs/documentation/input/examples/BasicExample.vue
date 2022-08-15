<template>
  <div class="live-v">
    <UIInput v-model="text" />
    <UIInput v-model="text2" aria-label="Bad" placeholder="Prefer a UILabel" />
    <UILabel>
      <span>Better to use a label</span>
      <UIInput v-model="text3" class="mt-1" />
    </UILabel>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const text = ref('');
const text2 = ref('');
const text3 = ref('');
</script>
