---
title: Sample post
date: 2023-04-16
tags:
  - svelte
hidden: true
---

<script>
  import Counter from './counter.svelte'
</script>

## Svelte

Media inside the **static** folder is served from `/`.

![Svelte](favicon.png)

## Counter

<Counter />

```ts
function greet(name: string) {
	console.log(`Hey ${name}! 👋`);
}
```
