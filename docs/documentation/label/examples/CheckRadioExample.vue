<template>
  <div class="live-h">
    <UILabel radio>
      <UIInput v-model="radio" type="radio" />
      <span class="ml-2">Radio label</span>
    </UILabel>
    <UILabel check>
      <UIInput v-model="check" type="checkbox" />
      <span class="ml-2">Checkbox label</span>
    </UILabel>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const check = ref(false);
const radio = ref(false);
</script>
