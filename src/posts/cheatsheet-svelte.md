---
title: 'Cheatsheet - Svelte'
date: '2019-10-03'
tags:
  - cheatsheet
  - svelte
---

## Capacitor

These will cause problem:

- +layout.server.js

## Initialize new project

Ensure node v16.

```
npm create svelte@latest my-app
npm i -D sass

// cd into folder and run npm install
```

## Install tailwind css

Automated way:capacitor

```
npx svelte-add@latest tailwindcss --daisyui --forms --typography
```

Manually:

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

// lib/tailwind.css
@tailwind base;
@tailwind components;
@tailwind utilities;

// __layout.svelte
<script>
import "$lib/tailwind.css";
</script>
<div class="pt-2">
  <slot />
</div>

// tailwind.config.cjs
{
...,
content: ['./src/**/*.{js,ts,svelte}'],
}

// Install DaisyUI

npm i daisyui

// tailwind.config.cjs
plugins: [
  require('daisyui')
]
```

To use theme, edit 'src/app.html' like `<html lang="en" data-theme="dark">`.

## Sanity CMS

Use Sanity if it's a large project with many people accessing the CMS.

Use Netlify CMS if it's a solo project and not more than 1 content changes a day.

Sanity is API based while Netlify is Git based.

To check: Are dynamically generated page from Sanity SEO friendly?

To install Sanity CMS in a new folder:

```
Go to 'https://www.sanity.io/get-started' to create a new project.

Then run: `npm install -g @sanity/cli && sanity init --template get-started --project <PROJECT_ID> --dataset production --provider github`
```

Contents are on Sanity Google Cloud server. I feel insecure. I'd prefer it to have an auto-backup to Github. Read more here: https://www.sanity.io/guides/studio-backup-github-actions-artifacts

## Nuxt Content Replacement

Need a replacement to read markdown.

Use MDsvex.

Read this on SEO with SvelteKit: https://github.com/rodneylab/sveltekit-blog-mdx.git

https://jeffpohlmeyer.com/building-a-blog-with-sveltekit-tailwindcss-and-mdsvex
