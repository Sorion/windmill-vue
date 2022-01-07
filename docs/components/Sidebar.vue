<template>
  <aside>
    <div v-for="(item, index) in data" :key="index" class="sidebar-label">
      <p class="mb-4">{{ item.category }}</p>
      <div
        v-for="description in item.pages"
        :key="description.title"
        class="item-container"
        :class="{ active: description.link === route.path }"
      >
        <router-link class="item-link" :to="description.link"
          ><span>{{ description.title }}</span></router-link
        >
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'Sidebar',
  props: {
    data: { type: Array, default: () => [] },
  },
  setup() {
    const route = useRoute();
    return {
      route,
    };
  },
});
</script>

<style lang="postcss" scoped>
aside {
  @apply flex flex-col bg-gray-100 w-72 py-8 px-5 flex-shrink-0;
}

.sidebar-label {
  @apply text-gray-800 uppercase tracking-wide mb-8;
}

.item-container {
  @apply text-gray-400 hover:text-gray-600;
}

.active {
  @apply font-bold text-black;
}

.item-link {
  @apply capitalize my-7;
}
</style>
