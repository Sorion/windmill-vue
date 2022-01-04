<template>
  <div class="pagination-container">
    <span class="pagination-label">
      Showing {{ activePage * resultsPerPage - resultsPerPage - 1 }} -
      {{ Math.min(activePage * resultsPerPage, totalResults) }} of {{ totalResults }}
    </span>

    <div class="navigation-container">
      <nav :aria-label="label">
        <ul class="navigation-list">
          <li>
            <UINavigationButton
              direction-icon="prev"
              :disabled="activePage === FIRST_PAGE"
              :on-click="handlePreviousClick"
            ></UINavigationButton>
          </li>
          <li v-for="(page, key) in pages" :key="key">
            <UIEmptyButton v-if="page === '...'" />
            <UIPageButton
              v-else
              :page="page"
              :is-active="page === activePage"
              @click="setActivePage(page)"
            ></UIPageButton>
          </li>
          <li>
            <UINavigationButton
              direction-icon="next"
              :disabled="activePage === LAST_PAGE"
              :on-click="handleNextClick"
            ></UINavigationButton>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onUpdated, ref } from 'vue';

import UINavigationButton from './UINavigationButton.vue';
import UIPageButton from './UIPageButton.vue';
import UIEmptyButton from './UIEmptyButton.vue';

export default defineComponent({
  name: 'UIPagination',
  components: {
    UINavigationButton,
    UIPageButton,
    UIEmptyButton
  },
  props: {
    totalResults: { type: Number, required: true },
    resultsPerPage: { type: Number, required: true },
    onChange: { type: Function, required: true },
    label: { type: String, required: true }
  },
  setup(props) {
    const FIRST_PAGE = 1;
    const MAX_VISIBLE_PAGES = 7;

    const TOTAL_PAGES = ref(Math.ceil(props.totalResults / props.resultsPerPage));
    const LAST_PAGE = TOTAL_PAGES;

    const activePage = ref(1);

    const handlePreviousClick = () => {
      activePage.value = activePage.value - 1;
    };

    const handleNextClick = () => {
      activePage.value = activePage.value + 1;
    };

    const pages = computed(() => {
      let elements = [];

      if (TOTAL_PAGES.value <= MAX_VISIBLE_PAGES) {
        elements = Array.from({ length: TOTAL_PAGES.value }).map((_, i) => i + 1);
      } else if (activePage.value < 5) {
        elements = [1, 2, 3, 4, 5, '...', TOTAL_PAGES.value];
      } else if (activePage.value >= 5 && activePage.value < TOTAL_PAGES.value - 3) {
        elements = [1, '...', activePage.value, activePage.value + 1, '...', TOTAL_PAGES.value];
      } else {
        elements = [
          1,
          '...',
          TOTAL_PAGES.value - 4,
          TOTAL_PAGES.value - 3,
          TOTAL_PAGES.value - 2,
          TOTAL_PAGES.value - 1,
          TOTAL_PAGES.value
        ];
      }

      return elements;
    });

    const setActivePage = (page: number | string) => {
      if(page.constructor instanceof String) {
        return 
      } else {
        const numberValue = page as number;
        activePage.value = numberValue
      }
      
    };

    onUpdated(() => {
      props.onChange(activePage.value);
    });

    return {
      handlePreviousClick,
      handleNextClick,
      setActivePage,
      activePage,
      pages,
      FIRST_PAGE,
      LAST_PAGE
    };
  }
});
</script>

<style lang="postcss" scoped>
.pagination-container {
  @apply flex flex-col justify-between text-xs sm:flex-row text-gray-600 dark:text-gray-400;
}

.pagination-label {
  @apply flex items-center font-semibold tracking-wide uppercase;
}

.navigation-container {
  @apply flex mt-2 sm:mt-auto sm:justify-end;
}

.navigation-list {
  @apply inline-flex items-center;
}
</style>
