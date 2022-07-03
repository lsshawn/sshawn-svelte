<script>
    import SEO from '$lib/components/seo.svelte';
    const seoProps = { title: 'Home' };
</script>

<SEO {...seoProps} />

<div class="content-container">
    <h1 class="text-3xl font-bold underline">Welcome to SvelteKit</h1>
    <p>
        Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
    </p>
    <button class="btn">Button</button>
</div>
