import { json } from '@sveltejs/kit';
import type { Post } from '$lib/types';

async function getPosts() {
	let posts: Post[] = [];

	const paths = import.meta.glob('/src/posts/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const meta = file.metadata as Omit<Post, 'slug'>;
			const post = {
				meta,
				slug,
				content: file['default'].render()['html'],
				// content: file['default'],
			} satisfies Post;
			if (!post.meta.unlisted && !post.meta.isPrivate) posts.push(post);
		}
	}

	posts = posts.sort(
		(first, second) =>
			new Date(second.meta.date).getTime() -
			new Date(first.meta.date).getTime(),
	);

	return posts;
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}
