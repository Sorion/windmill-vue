<template>
  <div>
    <Example :code="code">
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
    </Example>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { labelCode } from './code';

export default defineComponent({
  setup() {
    return {
      code: labelCode,
      text: ref(''),
      text2: ref(''),
      text3: ref(''),
    };
  },
});
</script>
