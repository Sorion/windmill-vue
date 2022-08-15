<template>
  <div class="live-preview">
    <slot></slot>
  </div>
</template>

<style>
/* Remove all vitepress style that may interfer with component preview */

.live-preview ul,
.live-preview ol {
  padding-left: O;
  margin: 0;
}

.live-preview ul {
  list-style: none;
}

.live-preview ol {
  list-style: decimal;
}

.live-preview li + li {
  margin-top: 0 !important;
}

.live-preview li > ol,
.live-preview li > ul {
  margin: 0;
}

.live-preview table {
  display: table !important;
  border-collapse: collapse;
  margin: 0 !important;
  overflow-x: auto;
}

.live-preview tr {
  border: none !important;
  transition: background-color 0.5s;
}

.live-preview tr:nth-child(2n) {
  background-color: var(--vp-c-bg-soft);
}

.live-preview th,
.live-preview td {
  border: none;
  padding: 0;
}

.live-preview th {
  font-size: 16px;
  font-weight: 600;
  background-color: transparent;
}

.dark .live-preview th {
  background-color: var(--vp-c-black);
}
</style>