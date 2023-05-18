<script>
	import SEO from '$lib/components/seo.svelte'
	const seoProps = { title: 'About' }
	export let data
</script>

<SEO {...seoProps} />

<div class="content-container prose">
	<h1 class="text-center">About Me</h1>

	<svelte:component this={data.content} />
</div>
