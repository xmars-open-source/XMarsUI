---
id: float
title: Float
sidebar_label: Float
---
Utilities for controlling the wrapping of content around an element.

<div class=" overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch"><table class="table w-full text-left table-collapse"><thead><tr><th class="text-sm font-semibold text-gray-700 p-2 bg-gray-100">Class</th> <th class="text-sm font-semibold text-gray-700 p-2 bg-gray-100">Properties</th></tr></thead> <tbody class="align-baseline"><tr><td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap">.float-right</td> <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">float: right;</td></tr> <tr><td class="p-2 border-t border-gray-200 font-mono text-xs text-purple-700 whitespace-no-wrap">.float-left</td> <td class="p-2 border-t border-gray-200 font-mono text-xs text-blue-700 whitespace-pre">float: left;</td></tr> <tr><td class="p-2 border-t border-gray-200 font-mono text-xs text-purple-700 whitespace-no-wrap">.float-none</td> <td class="p-2 border-t border-gray-200 font-mono text-xs text-blue-700 whitespace-pre">float: none;</td></tr> <tr><td class="p-2 border-t border-gray-200 font-mono text-xs text-purple-700 whitespace-no-wrap">.clearfix</td> <td class="p-2 border-t border-gray-200 font-mono text-xs text-blue-700 whitespace-pre">{`&::after {
  content: "";
  display: table;
  clear: both;
}`}</td></tr></tbody></table></div>

## Float right

Use `.float-right` to float an element to the right of its container.

<p>
    <div class="bg-gray-200 p-4">
        <img class="float-right ml-4 my-2 h-32" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.</p>
    </div>
</p>

```html
<div class="bg-gray-200 p-4">
  <img class="float-right ml-4 my-2 h-32" src="#">
  <p>Lorem...</p>
</div>
```

## Float left

Use `.float-left` to float an element to the left of its container.

<div class="bg-gray-200 p-4">
  <img class="float-left mr-4 my-2 h-32" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" />
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.</p>
</div>

## Don't float

Use `.float-none` to reset any floats that are applied to an element. This is the default value for the float property.

<div class="bg-gray-200 p-4">
  <img class="float-none mb-4 h-32" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" />
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula felis.</p>
</div>

## Clearfix

Use `.clearfix` to force an element to self-clear its children.

<div class="clearfix mb-6">
  <p class="text-sm text-gray-600">Without clearfix</p>
  <div class="bg-gray-200 p-4">
    <img class="float-left mr-4 my-2 h-32" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula.</p>
  </div>
</div>

<div>
  <p class="text-sm text-gray-600">With clearfix</p>
  <div class="clearfix bg-gray-200 p-4">
    <img class="float-left mr-4 my-2 h-32" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula.</p>
  </div>
</div>

## Responsive

To control the float of an element at a specific breakpoint, add a `{screen}:` prefix to any existing float utility class. For example, use `md:float-left` to apply the `float-left` utility at only medium screen sizes and above.

For more information about Tailwind's responsive design features, check out the [Responsive Design](/docs/responsive-design) documentation.

```html
<div class="bg-gray-200 p-4">
  <img class="float-right sm:float-left md:float-none lg:float-right xl:float-left m-2 h-32" src="#" />
  <p>Lorem ...</p>
</div>
```