# Windmill

## Import

```js
import { WApp } from '@sorion/windmill-vue'
```

## Base

The default `WApp` component must encapsulate your root component and it doesn't apply any
changes by default.

:::info
This is only recommended if you just want to provide a single light theme.
:::

```vue-html
<WApp>
  Your app
</WApp>
```

## Dark as default

The `dark` prop turns the dark theme on.

The `dark` prop can also be made reactive by passing it an `ref` or
`computed` from vuex, pinia etc.

```vue-html
<WApp dark>
  Your app
</WApp>
```

## Props overview

| Prop       | Description          | Type                    | Default  |
| ---------- | :------------------: | :---------------------: | -------: |
| dark | apply dark theme | `boolean` | `false` |
