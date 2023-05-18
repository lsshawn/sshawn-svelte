<script lang="ts">
	import type { Post } from '$lib/types'
	export let post: Post
</script>

{#if post.meta.image}
	<img
		src={post.meta.image}
		alt={post.meta.title}
		class="mb-0 mt-6 max-h-[300px] object-contain mx-auto"
	/>
	{#if post.meta.imageCreditUrl}
		<a
			href={post.meta.imageCreditUrl}
			class="no-underline italic text-gray-500 text-right"
			target="_blank">Photo by {post.meta.imageCredit}</a
		>
	{/if}
{/if}
