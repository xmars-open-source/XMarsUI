---
id: container
title: Container
sidebar_label: Container
---

A component for fixing an element's width to the current breakpoint.

<div class="border-t border-b border-gray-300 mt-0 mb-12">
  <table class="table w-full text-left table-collapse">
    <colgroup>
      <col class="w-1/4"></col>
      <col class="w-1/4"></col>
      <col class="w-1/2"></col>
    </colgroup>
    <thead>
      <tr>
        <th class="text-sm font-semibold text-gray-700 p-2 bg-gray-100">Class</th>
        <th class="text-sm font-semibold text-gray-700 p-2 bg-gray-100">Breakpoint</th>
        <th class="text-sm font-semibold text-gray-700 p-2 bg-gray-100">Properties</th>
      </tr>
    </thead>
    <tbody class="align-baseline">
      <tr>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700" rowspan="5">.container</td>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-gray-600"><span class="font-sans italic font-sans">None</span></td>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700">width: 100%;</td>
      </tr>
      <tr>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-gray-700">sm <span class="text-gray-600 font-sans italic">(640px)</span></td>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700">max-width: 640px;</td>
      </tr>
      <tr>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-gray-700">md <span class="text-gray-600 font-sans italic">(768px)</span></td>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700">max-width: 768px;</td>
      </tr>
      <tr>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-gray-700">lg <span class="text-gray-600 font-sans italic">(1024px)</span></td>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700">max-width: 1024px;</td>
      </tr>
      <tr>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-gray-700">xl <span class="text-gray-600 font-sans italic">(1280px)</span></td>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700">max-width: 1280px;</td>
      </tr>
    </tbody>
  </table>
</div>

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