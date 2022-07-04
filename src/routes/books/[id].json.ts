//@ts-ignore
export async function get({ url }) {
  const path = url.pathname
  const slug = path.substr(path.lastIndexOf('/') + 1).replace('.json', '')

  const res = await import(`../../lib/content/books/${slug}.md`)

  const book = {
    ...res.metadata,
    html: res.default.render()['html']
  }

  return {
    status: 200,
    body: { book }
  }
}
