---
layout: docs
title: Placeholder
description: Use loading placeholders for your components or pages to indicate something may still be loading.
group: components
toc: true
---

## About

Placeholders can be used to enhance the experience of your application. They're built only with HTML and CSS, meaning you don't need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, color, and sizing can be easily customized with our utility classes.

## Example

In the example below, we take a typical card component and recreate it with placeholders applied to create a "loading card". Size and proportions are the same between the two.

{{< example >}}
<p class="placeholder" aria-hidden="true">
    <span class="title"></span>
    <span class="el"></span>
    <span class="el"></span>
    <span class="el"></span>
    <span class="el"></span>
    <span class="el"></span>
</p>
{{< /example >}}

### Width

You can change the `width` through grid column classes, width utilities, or inline styles.

{{< example >}}
<p class="placeholder" aria-hidden="true">
    <span class="el"></span>
    <span class="el"></span>
    <span class="el" style="width: 25%;"></span>
</p>
{{< /example >}}


### Sizing

The size of `.placeholder`s are based on the typographic style of the parent element. Customize them with sizing modifiers: `.placeholder-lg`, `.placeholder-sm`, or `.placeholder-xs`.

{{< example >}}
<p class="placeholder" aria-hidden="true">
    <span class="el lg"></span>
    <span class="el"></span>
    <span class="el sm"></span>
    <span class="el xs"></span>
</p>
{{< /example >}}

### Animation

Animate placeholders with `.placeholder-glow` or `.placeholder-wave` to better convey the perception of something being _actively_ loaded.

{{< example >}}
<p class="placeholder glow">
  <span class="el"></span>
</p>

<p class="placeholder wave">
  <span class="el"></span>
</p>
{{< /example >}}

## Sass

### Variables

{{< scss-docs name="placeholders" file="scss/_variables.scss" >}}
