<template>
  <footer><p>Copyright © 2021 Sorion</p></footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer',
})
</script>

<style lang="postcss" scoped>
footer {
  @apply flex items-center justify-center h-24 bg-gray-600 text-white;
}
</style>
