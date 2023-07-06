---
title: refactoring ui book
date: 2022-12-10 19:04
---

Start with fat marker.

Start with no color to force you to use contrast and spacing.

## Color

Use font weight and color to emphasize words instead of text size.

Don't use grey text on colored background to de-emphasize a text. Use a lighter hue of that background color.

Emphasize by de-emphasizing the other components instead of making it bolder.

Add a top border color to a card can be nice.

## Buttons

If you need multiple buttons on a card, don't use many colors. Use solid, outline, and text styled button.

Destructive buttons don't need to be a button with red background if it's not the primary action.

## Label

Drop labels like 'Name: Shawn'. Use '3 in stock' instead of 'Stock: 3'.

If you need label, grey it.

Labels only makes sense in detailed description like the dimension of a product.

Page title don't need `h1` tag. The content should be the emphasis.

## Spacing

Start with more white space, then remove.

Define a spacing scale that's not a 25% jump from each other.

Not everything needs to scale in proportion. Components should scale independently. Elements that are large on large screen needs to shrink faster than elements that are already small.

Group things together:
- Article headings should have larger top margin than bottom.
- Form label should have larger top margin than bottom.
- Spacing between bullets should be more than line height.

## Font

Use px or rem.

Don't use fonts with less than 5 weights.

Fonts meant for headlines usually have tighter letter-spacing and shorter lowercase letters (a shorter x-height), while fonts meant for smaller sizes have wider letter-spacing and taller lowercase letters.

Replace bullets with icons.

The quotes in testimonial can be a design icon.

## Grid

Grid do more harm. Set max-width instead.

Don't use percentage for things you don't want to scale.

## Images

Take screenshot in a smaller screen or partial screenshot. If you need a full screenshot, draw a simplified UI with details removed and small texts replaced with lines.

It's better to redraw an icon at different size instead of scaling it.

Always better to add border to avatar images.

Add simple pattern images in the background to look professional.

## Blank states

Hide your table until user added their first data. Show a prominent guide and CTA to add their first data.

----
Tags:
:book:
:tailwind:
:ui:
