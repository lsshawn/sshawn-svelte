<script>
	import { dev } from '$app/environment'
	// Props
	export let sitename = 'SShawn '
	export let description = 'Programmer, Web3, builds stuff minimally'
	export let title = ''
	export let pageType = 'website'
	export let twitter = 'me_sshawn'
	export let image = {
		src: '',
		alt: ''
	}

	export const baseUrl = dev ? 'http://localhost:5173' : 'https://sshawn.com'
	export let url = ''

	const pageTitle = `${sitename}${title ? ` | ${title}` : ''}`
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="Programmer, Web3, Svelte, Blog, Vue.js, Crypto, Minimalist, Fullstack"
	/>
	<meta http-equiv="Content-language" content="en_US" />

	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content={pageType} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:site_name" content={sitename} />
	<meta property="og:url" content="https://sshawn.com/{url}" />

	<link rel="me" href={`https://twitter.com/${twitter}`} />
	<meta name="twitter:widgets:theme" content="dark" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content={`@${twitter}`} />

	{#if image.src}
		<meta property="og:image" content={image.src} />
		<meta name="twitter:image" content={image.src} />
		<meta name="twitter:image:alt" content={image.alt} />
	{/if}

	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<slot />
</svelte:head>
