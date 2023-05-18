<script lang="ts">
	import '../app.postcss'
	import PageTransition from './transition.svelte'
	import TopNav from '$lib/components/TopNav.svelte'
	import Seo from '$lib/components/seo.svelte'
	import AppFooter from '$lib/components/AppFooter.svelte'

	export let data
</script>

<Seo />
<div>
	<TopNav />
	<main>
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>
	<AppFooter />
</div>
