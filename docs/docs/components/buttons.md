---
id: buttons
title: Buttons
sidebar_label: Buttons
---

import Button from 'xmars-ui/Button';
import IconButton from 'xmars-ui/IconButton';

Use XMars-UI custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.

> Ripple effect is only availabel using React component `Button`

## Examples
XMars-UI includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.
<p>
    <Button ripple>Subscribe</Button>
    <Button ripple accent>Subscribe</Button>
    <Button ripple primary>Subscribe</Button>
</p>

#### HTML

```html
<button type="button" class="btn">Subscribe</button>
<button type="button" class="btn accent">Subscribe</button>
<button type="button" class="btn primary">Subscribe</button>
```

#### React JSX

```jsx
<Button>Subscribe</Button>
<Button accent>Subscribe</Button>
<Button primary>Subscribe</Button>
```

#### Ripple Effect
Ripple effect is only availabel using React component `Button`. To enable ripple effect add `ripple` prop.

## Button tags
The .btn classes are designed to be used with the `<button>` element. However, you can also use these classes on `<a>` or `<input>` elements (though some browsers may apply a slightly different rendering).

When using button classes on `<a>` elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a role="button" to appropriately convey their purpose to assistive technologies such as screen readers.

<p>
    <a role="button" href="#" class="btn primary">Link</a>
    <button type="button" class="btn primary ml-1">Button</button>
    <input type="button" class="btn primary ml-1" value="Input" />
    <input type="submit" class="btn primary ml-1" value="Submit" />
    <input type="reset" class="btn primary ml-1" value="Reset" />
</p>

```html
<a role="button" href="#" class="btn primary">Link</a>
<button type="button" class="btn primary">Button</button>
<input type="button" class="btn primary" value="Input" />
<input type="submit" class="btn primary" value="Submit" />
<input type="reset" class="btn primary" value="Reset" />
```

## Sizes
Fancy larger or smaller buttons? Add `big` or `small` for additional sizes.

Create block level buttons—those that span the full width of a parent—by adding [Sizing Utilities]() class `w-full`.

<p>
    <Button ripple primary additionalClass="uppercase w-full">Subscribe</Button>
</p>

#### HTML
```html
<button type="button" class="btn primary uppercase w-full">Subscribe</button>
```

#### React JSX
```jsx
<Button ripple primary additionalClass="uppercase w-full">Subscribe</Button>
```

### Icon Button
XMars UI has `IconButton` component with composed `Button` and `Icon` component under the hood. See [Icons](/docs/components/icons) for more details

<p>
    <IconButton primary ripple circle name="add" />
</p>

#### React JSX
```jsx
<IconButton primary ripple circle name="add" />
```