<script>
	import PostFeaturedImage from '$lib/components/PostFeaturedImage.svelte'
	import PostMeta from '$lib/components/PostMeta.svelte'

	export let data
</script>

<div class="content-container prose">
	{#each data.posts as post}
		<div class="card">
			<div class="card-body">
				<a href={`/${post.slug}`} class="no-underline">
					<h1 class="text-3xl card-title mb-1">{post.meta.title}</h1>
				</a>
				<PostMeta {post} />
				<PostFeaturedImage {post} />

				<article>
					<div class="post-excerpt">
						{@html post.content}
					</div>
					<!-- {#if post.content} -->
					<!-- 	<div class="prose"> -->
					<!-- 		<svelte:component this={post.content} /> -->
					<!-- 	</div> -->
					<!-- {/if} -->
				</article>

				<div class="card-actions justify-start">
					<a href={`/${post.slug}`} sveltekit:prefetch>
						<button class="btn btn-primary btn-xs normal-case"> Read more </button>
					</a>
				</div>
			</div>
		</div>
		<div class="divider" />
	{/each}
</div>

<style>
	.post-excerpt {
		-webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
		mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
		max-height: 40vh;
		overflow-y: hidden;
	}
</style>
