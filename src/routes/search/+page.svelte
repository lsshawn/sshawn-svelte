<script>
	import { onMount } from 'svelte';
	import { buildSearchIndex, search } from '$lib/search';

	let searchResults = [];
	let searchQuery = '';

	onMount(async () => {
		await buildSearchIndex();
	});

	async function performSearch() {
		if (searchQuery) {
			searchResults = await search(searchQuery);
		} else {
			searchResults = [];
		}
	}
</script>

<input
	type="text"
	bind:value={searchQuery}
	on:input={performSearch}
/>

{#if searchResults.length > 0}
	<ul>
		{#each searchResults as result}
			<li>
				<a href={result.key}>{result.doc.title}</a>
				<p>{result.doc.description}</p>
			</li>
		{/each}
	</ul>
{:else}
	<p>No results found.</p>
{/if}
