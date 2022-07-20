<script>
    import { page } from '$app/stores';
    import Home from '$lib/assets/icons/Home.svelte';
    import Now from '$lib/assets/icons/Now.svelte';
    import Book from '$lib/assets/icons/Book.svelte';
    import About from '$lib/assets/icons/About.svelte';

    $: basePath = $page.url.pathname.split('/')[1];
</script>

<div class="tab-nav-container visible lg:hidden">
    <a href="/" sveltekit:prefetch>
        <div class="tab" class:active={basePath === ''}>
            <Home />
            <p>Home</p>
        </div>
    </a>

    <a href="/now" sveltekit:prefetch>
        <div class="tab" class:active={basePath === 'now'}>
            <Now />
            <p>Now</p>
        </div>
    </a>

    <a href="/books" sveltekit:prefetch>
        <div class="tab" class:active={basePath === 'books'}>
            <Book />
            <p>Books</p>
        </div>
    </a>

    <a href="/about" sveltekit:prefetch>
        <div class="tab" class:active={basePath === 'about'}>
            <About />
            <p>About</p>
        </div>
    </a>
</div>

<style lang="scss">
    .tab-nav-container {
        display: flex;
        padding: 10px;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 62px;
        background-color: #ffffff;
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
            0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
    }

    .tab {
        border-radius: 50px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 10px;
        margin: 0 5px;
        transition: background 0.4s linear;
        height: 40px;
        min-width: 20vw;

        p {
            font-weight: bold;
            overflow: hidden;
            max-width: 0;
        }
    }

    .tab.active {
        background-color: #f9a825;
        color: #2e2e2e;

        p {
            max-width: 100px;
            transition: max-width 0.4s linear;
        }
    }
</style>
