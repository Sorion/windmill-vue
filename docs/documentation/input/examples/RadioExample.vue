<template>
  <div class="live-v live-h">
    <UIInput v-model="radio" type="radio" />
    <UIInput v-model="radio2" type="radio" checked />
    <div>
      <UILabel radio>
        <UIInput v-model="radio3" type="radio" />
        <span class="ml-2">Go to UILabel to read more</span>
      </UILabel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const radio = ref(false);
const radio2 = ref(false);
const radio3 = ref(false);
</script>
