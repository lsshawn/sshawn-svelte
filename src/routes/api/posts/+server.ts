import { json, type RequestEvent } from '@sveltejs/kit';
import type { Post } from '$lib/types';

async function getPosts(page = 1, limit = 10) {
	const paths = import.meta.glob('/src/posts/*.md');

	const startIndex = (page - 1) * limit;
	console.log(
		'LS -> src/routes/api/posts/+server.ts:8 -> startIndex: ',
		startIndex,
	);

	const posts: Post[] = [];
	for (const path in paths) {
		const slug = path.split('/').at(-1)?.replace('.md', '');

		const fileData = await import(path);
		const metadata = fileData.metadata;

		if (metadata && slug) {
			if (metadata.unlisted || metadata.isPrivate) continue;
			const meta = metadata as Omit<Post, 'slug'>;
			const content = await (await fileData['default']).render()['html'];
			const post = {
				meta,
				slug,
				content,
			} satisfies Post;

			posts.push(post);
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
		total: posts.length,
		data: paginatedPosts,
		remainingCount: posts.length - startIndex - limit,
	};
}

export async function GET({ url }: RequestEvent) {
	const page = parseInt(url.searchParams.get('page') ?? '1', 10);
	const limit = parseInt(url.searchParams.get('limit') ?? '10', 10);
	const posts = await getPosts(page, limit);
	return json(posts);
}
