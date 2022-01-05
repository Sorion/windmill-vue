<template>
  <h1 class="mb-4">Props overview</h1>
  <table class="p-table">
    <thead class="p-table-heaeder">
      <tr class="p-tr">
        <th class="p-th">Prop</th>
        <th class="p-th">Description</th>
        <th class="p-th">Type</th>
        <th class="p-th">Default</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(prop, index) in props" :key="prop + index" class="p-tr">
        <td class="p-td">
          <AccentSpan>{{ prop.prop }}</AccentSpan>
        </td>
        <td class="p-td">
          {{ prop.description }}
        </td>
        <td class="p-td">
          <span v-for="type in prop.types" :key="type"
            ><AccentSpan>{{ type }}</AccentSpan
            >,</span
          >
        </td>
        <td class="p-td">
          <span v-if="prop.defaultValue !== ''">
            <AccentSpan>{{ prop.defaultValue }}</AccentSpan>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    props: { type: Array, required: true },
  },
});
</script>
