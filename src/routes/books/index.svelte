<script>
    import { page, getBooks, books } from '../stores.ts';
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
        if ($books.length === 0) getBooks();
    });
</script>

<h1 class="text-center">Book Notes</h1>

<div>{$page}</div>
<button on:click={() => getBooks($page + 1)}>Add page</button>
{#each $books as book}
    <div>{book.slug}</div>
{/each}
