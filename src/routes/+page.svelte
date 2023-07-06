<script lang="ts">
	import PostFeaturedImage from '$lib/components/PostFeaturedImage.svelte';
	import PostMeta from '$lib/components/PostMeta.svelte';
	import Seo from '$lib/components/seo.svelte';
	import type { Post } from '$lib/types';
	import LoadMore from '$lib/components/LoadMore.svelte';

	export let data;
	const total = data.total;
	let page = data.page;
	let remainingCount = data.remainingCount;

	let posts: Post[] = data?.data;
	const seoProps = { title: 'Notes' };

	async function loadMore() {
		const res = await fetch(`api/posts?page=${page + 1}`);
		const resData = await res.json();
		posts = [...posts, resData.data];
		remainingCount = resData.remainingCount;
	}
</script>

<Seo {...seoProps} />
<div class="content-container prose">
	{#each posts as post}
		<div class="card">
			<div class="card-body">
				<a
					href={`/${post.slug}`}
					class="no-underline"
				>
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
					<a
						href={`/${post.slug}`}
						sveltekit:prefetch
					>
						<button class="btn btn-primary btn-xs normal-case">
							Read more
						</button>
					</a>
				</div>
			</div>
		</div>
		<div class="divider" />
	{/each}
	<!-- <LoadMore -->
	<!-- 	noMoreResults={remainingCount <= 0} -->
	<!-- 	load={loadMore} -->
	<!-- 	loadingMoreText="Loading more posts..." -->
	<!-- 	noMoreResultText="No more posts to load" -->
	<!-- /> -->
	<button on:click={() => loadMore()}>load more</button>
</div>

<style>
	.post-excerpt {
		-webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
		mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
		max-height: 40vh;
		overflow-y: hidden;
	}
</style>
