//@ts-ignore
export async function get({ url }) {
  const postsPerPage = 100

  const page = parseInt(url.searchParams.get('page') ?? 1)

  const books = Object.entries(
    import.meta.globEager('$lib/content/books/*.md')
  )
    .map(([path, post]) => {
      const slug = path.substr(path.lastIndexOf('/') + 1).replace('.md', '').trim()
      return { slug, ...post.metadata }
    })
    .sort((a, b) => (a.created < b.created ? -1 : 1))
    .filter(obj => obj && obj.title)
    .slice((page - 1) * postsPerPage, page * postsPerPage)

  return {
    status: 200,
    body: { books }
  };
}
