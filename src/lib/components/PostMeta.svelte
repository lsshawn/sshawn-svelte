<script lang="ts">
	import type { Post } from '$lib/types'
	import { prettyDate } from '$lib/utils'

	export let post: Post
</script>

<!-- meta -->
<div class="flex gap-2 items-center text-gray-500 text-xs font-mono">
	<div>{prettyDate(post.meta.date)}</div>
	<div class="text-gray-300">|</div>
	<div class="tags">
		{#if post.meta.tags}
			{#each post.meta.tags as tag}
				<span class="badge badge-outline badge-md border-gray-500 text-gray-500 text-xs"
					>&num;{tag}</span
				>
			{/each}
		{/if}
	</div>
</div>
