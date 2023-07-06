<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	import { fade } from 'svelte/transition';

	export let noMoreResults = false;
	export let load;
	export let loadingMoreText = 'Loading more...';
	export let noMoreResultText = 'No more results';

	let infiniteLoadingElement;
</script>

<div
	class="mt-12 mb-[10vh]"
	in:fade={{ delay: 2000 }}
>
	{#if noMoreResults}
		<div class="text-center text-xs text-gray-500">{noMoreResultText}</div>
	{:else}
		<IntersectionObserver
			element={infiniteLoadingElement}
			on:intersect={(e) => {
				load();
			}}
		>
			<div bind:this={infiniteLoadingElement}>
				<div class="flex items-center justify-center gap-2">
					<span class="loading loading-bars loading-lg" />
					<div class="text-xs text-gray-500">{loadingMoreText}</div>
				</div>
			</div>
		</IntersectionObserver>
	{/if}
</div>
