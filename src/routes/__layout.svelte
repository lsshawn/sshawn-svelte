<script>
    import '$lib/tailwind.css';
    import TopNav from '$lib/components/TopNav.svelte';
    import MobileNav from '$lib/components/MobileNav.svelte';
    import Seo from '$lib/components/seo.svelte';
    import AppFooter from '$lib/components/AppFooter.svelte';
    import { page } from '$app/stores';
</script>

<div class="pt-2">
    <Seo />
    <TopNav />
    <main>
        <slot />
    </main>
    <MobileNav />
    <AppFooter />
</div>
