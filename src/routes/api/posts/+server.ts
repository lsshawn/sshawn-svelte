import { json, type RequestEvent } from '@sveltejs/kit';
import type { Post } from '$lib/types';
import { escapeSvelte } from 'mdsvex';

async function getPosts(page = 1, limit = 10) {
	const paths = import.meta.glob('/src/posts/*.md');

	const startIndex = (page - 1) * limit;

	const posts: Post[] = [];
	for (const path in paths) {
		if (posts.length >= limit) break;
		console.log('LS -> src/routes/api/posts/+server.ts:32 -> path: ', path);

		const file = paths[path];
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
	console.log('get');
	const page = parseInt(url.searchParams.get('page') ?? '1', 10);
	console.log('LS -> src/routes/api/posts/+server.ts:54 -> page: ', page);
	const limit = parseInt(url.searchParams.get('limit') ?? '10', 10);
	const posts = await getPosts(page, limit);
	return json(posts);
}
