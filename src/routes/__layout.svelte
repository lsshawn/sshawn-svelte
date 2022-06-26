<script>
    import '$lib/tailwind.css';
    import TopNav from '$lib/components/TopNav.svelte';
    import MobileNav from '$lib/components/MobileNav.svelte';
</script>

<div class="pt-2">
    <TopNav />
    <slot />
    <MobileNav />
</div>
