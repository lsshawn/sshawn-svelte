<script lang="ts">
	import type { Post } from '$lib/types';
	import { prettyDate } from '$lib/utils';

	export let post: Post;
</script>

<!-- meta -->
<div
	class="flex flex-col md:flex-row gap-2 md:items-center text-gray-500 text-xs font-mono"
>
	<div>
		{prettyDate(post?.meta?.date)}
		<span class="text-gray-300 hidden md:inline">|</span>
	</div>
	<div class="tags">
		{#if post?.meta?.tags}
			{#each post.meta.tags as tag}
				<span
					class="badge badge-outline badge-md border-gray-500 text-gray-500 text-xs mr-1 mb-1"
					>{tag}</span
				>
			{/each}
		{/if}
	</div>
</div>
