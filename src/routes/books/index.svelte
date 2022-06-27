<script>
    import { count } from '../stores.js';
    import { onMount } from 'svelte';
    let data = [];
    let newData = [];

    async function load() {
        console.log(`TCL:  -> load`);
        const res = await fetch('/books.json'); // context.fetch()
        const { books } = await res.json();
        newData = books;
    }

    onMount(() => {
        load();
    });

    $: books = [...data, ...newData];
</script>

<h1 class="text-center">Book Notes</h1>

<div>{$count}</div>
<button on:click={() => ($count += 1)}>Add page</button>
{#each books as book}
    <div>{book.slug}</div>
{/each}
