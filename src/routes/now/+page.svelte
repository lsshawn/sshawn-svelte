<script>
	import SEO from '$lib/components/seo.svelte'
	import ProjectList from '$lib/components/ProjectList.svelte'
	const seoProps = { title: 'Now' }
</script>

<SEO {...seoProps} />

<div class="content-container prose">
	<h1 class="text-center">Now</h1>

	<p>Working remotely in Chiang Mai.</p>
	<p>Runs a full-stack development agency focusing on start-ups.</p>
	<p>Loves learning to build new stuff. Looking to contribute to any exciting projects.</p>

	<h1 class="text-center">Projects</h1>

	<ProjectList />

	Have an idea in mind? <strong>Let me execute for you.</strong>

	<p>
		<a href="/contact">Let's talk</a>
	</p>

	<p>
		<i>Last Updated: 18 May 2023</i>
	</p>
</div>
