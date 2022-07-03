export async function get() {
  const files = await import.meta.glob('../../content/books/*.{svx,md}');

  const books = await Promise.all(
    Object.keys(files).map(async (path) => {
      const slug = path
      const { metadata } = await files[path]();
      console.log(metadata)
      return { slug, metadata }
    })
  );
  return {
    status: 200,
    body: { books }
  }
}
