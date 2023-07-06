---
title: Tailwind mistakes
date: 2023-01-21
tags:
  - tailwind
---

## Don't use @apply

Don't use `@apply` because inline-style is one of the benefit of tailwind.

It's ok to have repeated tailwind classes instead of refactoring with `@apply`.

## Use tailwind prettier plugin.

It sorts your class with the order of your CSS.

`npm i -D prettier prettier-plugin-tailwindcss`
