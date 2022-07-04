//@ts-ignore
export async function get({ url }) {
  const postsPerPage = 100

  const page = parseInt(url.searchParams.get('page') ?? 1)

  const posts = await Object.entries(
    import.meta.globEager('$lib/content/blog/*.md')
  )
    .map(([path, post]) => {
      const slug = path.substr(path.lastIndexOf('/') + 1).replace('.md', '').trim()
      return { slug, ...post.metadata, html: post.default.render()['html'] }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .filter(obj => obj && obj.title)
    .slice((page - 1) * postsPerPage, page * postsPerPage)

  return {
    status: 200,
    body: { posts }
  };
}
