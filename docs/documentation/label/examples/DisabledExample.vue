<template>
  <div class="live-h">
    <UILabel radio disabled>
      <UIInput v-model="radio" type="radio" />
      <span class="ml-2">Disabled radio label</span>
    </UILabel>
    <UILabel check disabled>
      <UIInput v-model="check" type="checkbox" />
      <span class="ml-2">Disabled checkbox label</span>
    </UILabel>
    <UILabel disabled>
      <span>Name</span>
      <UIInput v-model="text" class="mt-1" />
    </UILabel>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const check = ref(false);
const radio = ref(false);
const text = ref('');
</script>
