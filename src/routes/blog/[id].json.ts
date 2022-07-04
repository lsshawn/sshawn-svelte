//@ts-ignore
export async function get({ url }) {
  const path = url.pathname
  const slug = path.substr(path.lastIndexOf('/') + 1).replace('.json', '.md')

  const res = await import(`../../content/blog/${slug}`)

  const post = {
    ...res.metadata,
    html: res.default.render()['html']
  }

  return {
    status: 200,
    body: { post }
  }
}
