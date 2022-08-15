<template>
  <div class="live-v">
    <UILabel>
      <UIInput v-model="text" type="text" />
      <UIHelperText>Password should have more than 6 characters</UIHelperText>
    </UILabel>
    <UILabel>
      <UIInput v-model="text2" type="text" valid />
      <UIHelperText valid>Your password is strong</UIHelperText>
    </UILabel>
    <UILabel>
      <UIInput v-model="text3" type="text" :valid="false" />
      <UIHelperText :valid="false">Provide a valid email</UIHelperText>
    </UILabel>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const text = ref('');
const text2 = ref('');
const text3 = ref('');
</script>
