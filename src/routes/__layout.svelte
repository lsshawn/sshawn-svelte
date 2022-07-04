<script>
    import '$lib/tailwind.css';
    import TopNav from '$lib/components/TopNav.svelte';
    import MobileNav from '$lib/components/MobileNav.svelte';
    import Seo from '$lib/components/seo.svelte';
</script>

<div class="pt-2">
    <Seo />
    <TopNav />
    <slot />
    <MobileNav />
</div>
