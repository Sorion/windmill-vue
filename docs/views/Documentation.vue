<template>
  <main>
    <Navbar />
    <div class="documentation">
      <Sidebar :data="menu.documentation"></Sidebar>
      <div class="flex flex-1 justify-center">
        <router-view class="documentation-view" />
      </div>
    </div>
  </main>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import menu from '../data/menu';

export default defineComponent({
  name: 'Documentation',
  setup() {
    return {
      router: useRouter(),
      menu: menu,
    };
  },
});
</script>

<style lang="postcss" scoped>
.documentation {
  @apply flex flex-1 items-stretch bg-white;
  min-height: calc(100vh - 3.75rem - 6rem);
}

.documentation-view {
  @apply px-2 py-9 lg:w-4/5;
}
</style>
