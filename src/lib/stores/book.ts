import { writable } from 'svelte/store'

export const count = writable(0);

export const books = writable([])

export async function getBooks() {
  const files = await import.meta.glob('../content/books/*.{svx,md}');

 const books = await Promise.all(
   Object.keys(files).map(async (path) => {
     const slug = path
     const {metadata} = await files[path]();
     return { slug, metadata }
   })
 );

  this.books = [...this.books, ...books]
}
