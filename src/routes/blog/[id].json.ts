//@ts-ignore
export async function get({ url }) {
  const path = url.pathname
  const slug = path.substr(path.lastIndexOf('/') + 1).replace('.json', '.md')
  console.log(slug)

  const res = await import(`../../lib/content/blog/${slug}`)

  const post = {
    ...res.metadata,
    html: res.default.render()['html']
  }

  return {
    status: 200,
    body: { post }
  }
}
