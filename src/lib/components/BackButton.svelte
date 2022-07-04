<script>
    import ChevronLeft from '$lib/assets/icons/ChevronLeft.svelte';

    function back() {
        history.back();
    }
</script>

<button
    class="mb-8 btn btn-circle btn-link text-gray-900 visible md:invisible"
    on:click={back}
>
    <ChevronLeft />
</button>
