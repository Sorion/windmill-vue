<script lang="ts">
/**
 * Original code from vue-lock-focus
 * https://github.com/theKashey/vue-focus-lock
 * Adapted to use only vue3
 */
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
  toRefs,
  watch,
  getCurrentInstance,
  ComponentInternalInstance,
} from 'vue';
import moveFocusInside, { focusInside, focusIsHidden, constants } from 'focus-lock';

interface DataLock {
  vue: ComponentInternalInstance | null;
  observed: HTMLElement | undefined | null;
  disabled: boolean;
  onActivation: () => void;
}

function deferAction(action: () => void) {
  const setImmediate = window.setImmediate;
  if (typeof setImmediate !== 'undefined') {
    setImmediate(action);
  } else {
    setTimeout(action, 1);
  }
}

let lastActiveTrap: DataLock | null = null;
let lastActiveFocus: Element | null = null;
let focusWasOutsideWindow = false;

const focusOnBody = () => document && document.activeElement === document.body;
const isFreeFocus = () => focusOnBody() || focusIsHidden();
const activateTrap = () => {
  let result = false;
  if (lastActiveTrap) {
    const { observed, onActivation } = lastActiveTrap;
    if (focusWasOutsideWindow || !isFreeFocus() || !lastActiveFocus) {
      if (observed && !focusInside(observed)) {
        onActivation();
        result = true;
        if (lastActiveFocus) moveFocusInside(observed, lastActiveFocus);
      }
      focusWasOutsideWindow = false;
      lastActiveFocus = document && document.activeElement;
    }
  }
  return result;
};
const reducePropsToState = (propsList: DataLock[]) => {
  return propsList.filter(({ disabled }) => !disabled).slice(-1)[0];
};
const handleStateChangeOnClient = (trap: DataLock) => {
  if (lastActiveTrap !== trap) {
    lastActiveTrap = null;
  }
  lastActiveTrap = trap;
  if (trap) {
    activateTrap();
    deferAction(activateTrap);
  }
};
let instances: DataLock[] = [];
const emitChange = () => {
  handleStateChangeOnClient(reducePropsToState(instances));
};
const onTrap = (event: Event) => {
  if (activateTrap() && event) {
    // prevent scroll jump
    event.stopPropagation();
    event.preventDefault();
  }
};
const onBlur = () => {
  deferAction(activateTrap);
};
const onWindowBlur = () => {
  focusWasOutsideWindow = true;
};
const attachHandler = () => {
  document.addEventListener('focusin', onTrap, true);
  document.addEventListener('focusout', onBlur);
  window.addEventListener('blur', onWindowBlur);
};
const detachHandler = () => {
  document.removeEventListener('focusin', onTrap, true);
  document.removeEventListener('focusout', onBlur);
  window.removeEventListener('blur', onWindowBlur);
};

export default defineComponent({
  name: 'FocusLock',
  props: {
    returnFocus: { type: Boolean },
    disabled: { type: Boolean },
    noFocusGuards: { type: [Boolean, String], default: false },
    group: { type: String, default: '' },
  },
  setup(props) {
    const { returnFocus, disabled, noFocusGuards, group } = toRefs(props);

    const rootEl = ref<HTMLElement | null>(null);
    const data = ref<DataLock>({} as DataLock);
    const hidden = ref(''); //    "width: 1px;height: 0px;padding: 0;overflow: hidden;position: fixed;top: 0;left: 0;"
    const groupAttr = computed(() => {
      return { [constants.FOCUS_GROUP]: group.value };
    });
    const hasLeadingGuards = computed(() => {
      return noFocusGuards.value !== true;
    });
    const hasTailingGuards = computed(() => {
      return hasLeadingGuards.value && noFocusGuards.value !== 'tail';
    });

    watch(disabled, () => {
      data.value.disabled = disabled.value;
      emitChange();
    });

    let originalFocusedElement: HTMLElement;

    onMounted(() => {
      data.value.vue = getCurrentInstance();
      data.value.observed = rootEl.value?.querySelector('[data-lock]');
      data.value.disabled = disabled.value;
      data.value.onActivation = () => {
        originalFocusedElement = originalFocusedElement || (document && document.activeElement);
      };
      if (!instances.length) {
        attachHandler();
      }
      instances.push(data.value);
      emitChange();
    });
    onUnmounted(() => {
      instances = instances.filter(({ vue }) => vue !== getCurrentInstance());
      if (!instances.length) {
        detachHandler();
      }
      if (returnFocus.value && originalFocusedElement && originalFocusedElement.focus) {
        originalFocusedElement.focus();
      }
      emitChange();
    });
    return {
      groupAttr,
      hasLeadingGuards,
      hasTailingGuards,
      hidden,
      onBlur: () => deferAction(emitChange),
      rootEl,
    };
  },
});
</script>

<template>
  <div ref="rootEl">
    <div v-if="hasLeadingGuards" :tabIndex="disabled ? -1 : 0" :style="hidden" aria-hidden="true"></div>
    <div v-if="hasLeadingGuards" :tabIndex="disabled ? -1 : 1" :style="hidden" aria-hidden="true"></div>

    <div v-bind="groupAttr" data-lock @focusout="onBlur">
      <slot></slot>
    </div>

    <div v-if="hasTailingGuards" :tabIndex="disabled ? -1 : 0" :style="hidden" aria-hidden="true"></div>
  </div>
</template>
