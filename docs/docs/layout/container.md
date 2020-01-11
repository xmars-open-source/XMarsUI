---
id: container
title: Container
sidebar_label: Container
---

Table WIP

## Usage

The `.container` class sets the `max-width` of an element to match the `min-width` of the current breakpoint. This is useful if you'd prefer to design for a fixed set of screen sizes instead of trying to accommodate a fully fluid viewport.

Note that unlike containers you might have used in other frameworks, **XMarsUI's container does not center itself automatically and does not have any built-in horizontal padding.**

To center a container, use the `.mx-auto` utility:

```html
<div class="container mx-auto">
  <!-- ... -->
</div>
```

To add horizontal padding, use the `.px-{size}` utilities:

```html
<div class="container mx-auto px-4">
  <!-- ... -->
</div>
```