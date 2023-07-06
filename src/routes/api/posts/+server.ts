import { json, type RequestEvent } from '@sveltejs/kit';
import { browser } from '$app/environment';
import type { Post } from '$lib/types';

async function getPosts(url) {
	const page = parseInt(url?.searchParams.get('page') ?? '1', 10);
	const limit = parseInt(url?.searchParams.get('limit') ?? '10', 10);
	console.log('LS -> src/routes/api/posts/+server.ts:5 -> page: ', page);
	const paths = import.meta.glob('/src/posts/*.md', { eager: true });

	const startIndex = (page - 1) * limit;

	const posts: Post[] = [];
	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const meta = file.metadata as Omit<Post, 'slug'>;
			const post = {
				meta,
				slug,
				content: file['default'].render()['html'],
			} satisfies Post;
			if (!post.meta.unlisted && !post.meta.isPrivate) posts.push(post);
		}
	}

	const sortedPosts = posts.sort(
		(first, second) =>
			new Date(second.meta.date).getTime() -
			new Date(first.meta.date).getTime(),
	);

	const paginatedPosts = sortedPosts.slice(startIndex, startIndex + limit);

	return {
		page,
		limit,
		total: posts?.length,
		data: paginatedPosts,
		remainingCount: posts?.length - startIndex - limit,
	};
}

export async function GET({ url }: RequestEvent) {
	const posts = await getPosts(url);
	return json(posts);
}
