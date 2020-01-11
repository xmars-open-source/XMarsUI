---
id: installation
title: Installation
sidebar_label: Installation
---

XMarsUI is mostly CSS tool and you can get most of it without JS.
We are going to show you several ways to include XMarsUI into your project.

## Quick Start
Looking to quickly add XMarsUI to your project? Use [unpkg](https://unpkg.com/).

### CSS
[unpkg](https://unpkg.com/) is a fast, global content delivery network for everything on `npm`. You can get XMarsUI CSS using CDN:

```html
<!-- Somewhere in <head> -->
<link rel="stylesheet" href="https://unpkg.com/xmars-ui@latest/dist/xmars.css" crossorigin>
```

### JS (React)
Many of our components require the use of `React` to function.
We provide `bundle.min.js` bundle with all components exported on the `window.XMarsUI object`. That bundel is available on `unpkg`, as well as in the `npm` package.

```html
<!-- React -->
<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
<script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin></script>

<!-- XMarsUI -->
<script src="https://unpkg.com/xmars-ui@latest/dist/bundle.min.js" crossorigin> </script>

<script>
    const Button = XMarsUI.Button;
</script>
```

## NPM

The best way to consume XMars UI is via the `npm` package which you can install with `npm`.

```bash
npm install xmars-ui
```

## Stylesheets
Stylesheet is required to use components

```jsx
{/* The following line can be included in your src/index.js or App.js file*/}

import 'xmars-ui/dist/xmars.css';
```

## Importing
You should import individual components like: `xmars-ui/Button` rather than the entire library. Doing so pulls in only the specific components that you use, which can significantly reduce the amount of code you end up sending to the client.

```jsx
import Button from 'xmars-ui/Button';
```

## Typescript
XMarsUI supports `Typescript`, you don't need to install `@types/xmars-ui` to have proper typings.

## Browser support
We aim to support all browsers supported by both React and Tailwindcss
```json
'>= 1%',
'last 1 major version',
'not dead',
'Chrome >= 41',
'Firefox >= 38',
'Edge >= 12',
'Explorer >= 10',
'iOS >= 9',
'Safari >= 9',
'Android >= 4.4',
'Opera >= 30',
```