export const baseCode =
  '<UIPagination :total-results="120" :results-per-page="10" :on-change="() => {}" label="Page navigation" />';

export const props = [
  {
    prop: 'totalResults',
    description: 'define the length of the data',
    types: ['number'],
    defaultValue: '',
  },
  {
    prop: 'resultsPerPage',
    description: 'define how many results are shown in a page',
    types: ['number'],
    defaultValue: '',
  },
  {
    prop: 'label',
    description: 'the aria-label/name of the component',
    types: ['string'],
    defaultValue: '',
  },
  {
    prop: 'onChange',
    description: 'define an action to be called when a page changes',
    types: ['function'],
    defaultValue: '',
  },
];
