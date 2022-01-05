<template>
  <aside>
    <div v-for="(item, index) in data" :key="index" class="sidebar-label">
      <p>{{ item.category }}</p>
      <div v-for="description in item.pages" :key="description.title">
        <router-link class="item-link" :to="description.link"
          ><span>{{ description.title }}</span></router-link
        >
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Sidebar',
  props: {
    data: { type: Array, default: () => [] },
  },
});
</script>

<style lang="postcss" scoped>
aside {
  @apply flex flex-col bg-gray-100 w-72 py-8 px-5 flex-shrink-0;
}

.sidebar-label {
  @apply text-gray-400 uppercase tracking-wide mb-8;
}

.item-link {
  @apply capitalize text-black font-bold my-7;
}
</style>
