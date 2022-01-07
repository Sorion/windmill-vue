<template>
  <section class="flex flex-col min-h-screen">
    <section class="flex-1 flex flex-col items-center justify-center">
      <div class="text-purple-700 w-14 h-14 mb-4">
        <EmojiSadIcon />
      </div>

      <h1 class="mb-6">Page not found</h1>

      <UIButton @click="goToHome()">Go to home page</UIButton>
    </section>
    <Footer />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { EmojiSadIcon } from '@heroicons/vue/solid';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    EmojiSadIcon,
  },
  setup() {
    const router = useRouter();

    const goToHome = () => {
      router.push({ name: 'home' });
    };

    return {
      goToHome,
    };
  },
});
</script>
