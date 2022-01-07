<template>
  <Navbar />
  <main>
    <h1>Windmill Vue</h1>
    <h2>Vue 3 components library made with tailwind, inspired by Windmill React Ui</h2>
    <UIButton size="larger" @click="goToDoc()">Get Started</UIButton>
  </main>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Home',
  setup() {
    const router = useRouter();
    const goToDoc = () => {
      router.push({ name: 'documentation/get-started' });
    };

    return {
      goToDoc,
    };
  },
});
</script>
<style lang="postcss" scoped>
main {
  @apply flex flex-col items-center justify-center bg-white;
  height: calc(100vh - 3.75rem);
}

h1 {
  @apply text-6xl mb-6;
}

h2 {
  @apply mb-3;
}
</style>
