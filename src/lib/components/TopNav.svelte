<script>
	import { page } from '$app/stores'
	import { onMount } from 'svelte'
	$: basePath = $page.url.pathname.split('/')[1]

	let isScrolled = false

	onMount(() => {
		window.addEventListener('scroll', handleScroll)
	})

	function handleScroll() {
		const scrollPosition = window.scrollY
		isScrolled = scrollPosition > 0
	}

	const tabs = [
		{
			title: 'Notes',
			route: '/'
		},
		{
			title: 'Now',
			route: 'now'
		},
		{
			title: 'About',
			route: 'about'
		}
	]
</script>

<div
	class="navbar bg-base-100 flex justify-between sticky top-0 z-10"
	class:navbar-scrolled={isScrolled}
>
	<div class="">
		<a class="btn btn-ghost normal-case hover:bg-white wobble-image" href="/">
			<img src="/images/logo.png" class="w-12 aspect-square" alt="SShawn" />
			SShawn
		</a>
	</div>
	<div class="">
		<ul class="menu menu-horizontal p-0">
			{#each tabs as tab}
				<li class:active-menu={basePath === tab.route.replace('/', '')} class="md:mx-3">
					<a
						href={tab.route}
						class="text-gray-400 md:text-xl justify-center font-bold
            hover:text-black hover:bg-white
            ">{tab.title}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style lang="postcss">
	.active-menu a {
		@apply text-black font-bold;
	}

	.navbar-scrolled {
		border-bottom: 1px solid #e5dfdf;
	}
</style>
