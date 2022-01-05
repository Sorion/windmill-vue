<template>
  <div class="code-container">
    <pre
      class="line-numbers"
      :class="getStyle()"
    ><code :class="getStyle()" data-prismjs-copy="Copy">{{ code }}</code></pre>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import * as Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/toolbar/prism-toolbar.css';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';

export default defineComponent({
  name: 'CodeExample',
  props: {
    code: { type: String, default: '' },
    language: { type: String, default: 'language-html' },
  },
  setup(props) {
    onMounted(() => {
      window.Prism = Prism;
      //window.Prism.manual = true;

      Prism.highlightAll(); // highlight your code on mount
    });
    return {
      getStyle: () => {
        return props.language;
      },
    };
  },
});
</script>
<style lang="postcss">
pre[class*='language-'] {
  margin: 0 !important;
}
</style>
