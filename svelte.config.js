import { mdsvex } from 'mdsvex'
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import svg from '@poppanator/sveltekit-svg'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md', '.svx'],
  preprocess: [
    mdsvex({ extensions: ['.svelte.md', '.md', '.svx'] }),
    preprocess({
      postcss: true,
    }),
  ],
  kit: {
    adapter: adapter(),
    vite: {
      plugins: [svg({
        includePaths: ["./src/lib/icons/", "./src/assets/icons/"],
      })]
    }
  }
};

export default config;
