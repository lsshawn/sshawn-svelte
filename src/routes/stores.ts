import { writable, get } from 'svelte/store';

type Book = {
  slug: string;
  metadata: string;
};

const booksPerPage = 5
export const page = writable(0)

export const books = writable([] as Book[])

export async function getBooks(endPage = 0) {
console.log(`TCL:  -> endPage `, endPage)
  page.set(endPage || 0)
const currentPage = get(page)
console.log(`TCL:  -> currentPage `, currentPage)
  const allFiles = await import.meta.glob('../content/books/*.{svx,md}');
console.log(`TCL:  -> allFiles `, allFiles)
  const paths = Object.keys(allFiles).slice(currentPage * booksPerPage, currentPage+1 * booksPerPage)
console.log(`TCL:  -> paths `, paths)

 const newBooks = await Promise.all (
  paths.map(async (path) => {
     const slug = path
     const {metadata} = await allFiles[path]();
     return { slug, metadata }
   })
 );

 books.update(items => [...items, ...newBooks])
}
