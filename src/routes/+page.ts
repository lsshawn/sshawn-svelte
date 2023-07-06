import type { Post } from '$lib/types';

export async function load({ fetch }) {
	const response = await fetch('api/posts');
	const posts: PaginatedResponse = await response.json();
	return posts;
}
