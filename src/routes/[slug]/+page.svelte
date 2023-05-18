<script lang="ts">
	import PostFeaturedImage from '$lib/components/PostFeaturedImage.svelte'
	import PostMeta from '$lib/components/PostMeta.svelte'
	import Seo from '$lib/components/seo.svelte'
	import type { Post } from '$lib/types'
	import { prettyDate } from '$lib/utils'
	export let data: Post
	const seoProps = { title: `Notes: ${data.meta.title}` }
</script>

<Seo {...seoProps} />
<article class="content-container prose">
	<hgroup>
		<h1 class="mb-3">{data.meta.title}</h1>
		<PostMeta post={data} />
	</hgroup>

	<PostFeaturedImage post={data} />

	<div class="mt-16 w-full">
		<svelte:component this={data.content} />
	</div>
</article>
