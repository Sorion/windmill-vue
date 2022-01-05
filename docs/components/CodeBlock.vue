<template>
  <div>
    <pre
      class="language-javascript"
    ><code class="language-javascript" data-prismjs-copy="Copy"><slot></slot></code></pre>
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
  setup() {
    onMounted(() => {
      window.Prism = Prism;
      Prism.highlightAll();
    });
  },
});
</script>
