<template>
  <div class="live-v live-h">
    <UIInput v-model="check" type="checkbox" />
    <UIInput v-model="check2" type="checkbox" checked />
    <div>
      <UILabel check>
        <UIInput v-model="check3" type="checkbox" />
        <span class="ml-2">Go to UILabel to read more</span>
      </UILabel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const check = ref(false);
const check3 = ref(false);
const check2 = ref(false);
</script>
