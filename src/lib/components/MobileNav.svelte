<script>
    import { page } from '$app/stores';
    import Home from '$lib/assets/icons/Home.svelte';
    import Now from '$lib/assets/icons/Now.svelte';
    import Book from '$lib/assets/icons/Book.svelte';
    import About from '$lib/assets/icons/About.svelte';

    $: basePath = $page.url.pathname.split('/')[1];
</script>

<div class="w-full">
    <section
        id="bottom-navigation"
        class="block fixed inset-x-0 bottom-0 z-10 bg-white shadow p-2"
    >
        <div id="tabs" class="flex justify-between">
            <a
                href="/"
                sveltekit:prefetch
                class="w-full hover:text-primary focus:text-primary inline-block justify-center text-center rounded-2xl"
                class:active={basePath === ''}
            >
                <div class="tab">
                    <Home />
                </div>
                <span class="tab tab-explore block">Explore</span>
            </a>

            <a
                href="/now"
                sveltekit:prefetch
                class="w-full hover:text-primary focus:text-primary inline-block justify-center text-center rounded-2xl"
                class:active={basePath === 'now'}
            >
                <div class="tab">
                    <Now />
                </div>
                <span class="tab tab-explore block ">Now</span>
            </a>

            <a
                href="/books"
                sveltekit:prefetch
                class="w-full hover:text-primary focus:text-primary inline-block justify-center text-center rounded-2xl"
                class:active={basePath === 'books'}
            >
                <div class="tab">
                    <Book />
                </div>
                <span class="tab tab-explore block ">Books</span>
            </a>

            <a
                href="/about"
                sveltekit:prefetch
                class="w-full hover:text-primary focus:text-primary inline-block justify-center text-center rounded-2xl"
                class:active={basePath === 'about'}
            >
                <div class="tab">
                    <About />
                </div>
                <span class="tab tab-explore block ">Books</span>
            </a>
        </div>
    </section>
</div>

<style lang="scss">
    a.active {
        background-color: #f9a825;

        span {
            color: #111;
            font-weight: bold;
        }
    }
</style>
