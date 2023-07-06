import type { Post } from '$lib/types';

export async function load({ fetch }) {
	const response = await fetch('api/posts?page=1');
	const posts: PaginatedResponse = await response.json();
	return posts;
}
