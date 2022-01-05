<template>
  <div>
    <h2 v-if="title" class="bg-gray-100 rounded px-2 italic">{{ title }}</h2>
    <pre :class="language"><code :class="language" data-prismjs-copy="Copy"><slot></slot></code></pre>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/toolbar/prism-toolbar.css';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import { onMounted } from '@vue/runtime-core';
export default defineComponent({
  name: 'CodeBlock',
  props: {
    title: { type: String, default: null },
    language: { type: String, default: 'language-javascript' },
  },
  setup() {
    onMounted(() => {
      window.Prism = Prism;
      Prism.highlightAll();
    });
  },
});
</script>
