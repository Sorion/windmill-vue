<script setup>
  import AlternateExample from './examples/AlternateExample.vue';
  import ImageExample from './examples/ImageExample.vue';
  import SizeExample from './examples/SizeExample.vue';
</script>

# Avatar

## Import

```js
import { UIAvatar } from '@sorion/windmill-vue'
```

## Size

There are three sizes, applied by the prop size: `large`, `regular` (default) and `small`.

```vue-html
<UIAvatar size="large" src="/img/avatar-1.jpg" alt="Judith" />
<UIAvatar src="/img/avatar-1.jpg" alt="Judith" />
<UIAvatar size="small" src="/img/avatar-1.jpg" alt="Judith" />
```

<SizeExample />

## Image

Pass an image to the avatar using the prop `src`.

```vue-html
<UIAvatar src="/img/avatar-1.jpg" alt="Judith" />
```

<ImageExample />

## Alt

```vue-html
<UIAvatar src="/img/avatar-2.jpg" alt="George" />
```

<AlternateExample />

Pass an alternate text to the avatar using the prop `alt`.

## Props overview

| Prop       | Description                   | Type                                    | Default  |
| ---------- | :---------------------------: | :-------------------------------------: | -------: |
| size | define the size of component | `large`, `regular`, `small`| `regular`|
| src  | define the src of the image | `string`| |
| alt  | alternate text of the image | `string`| |
