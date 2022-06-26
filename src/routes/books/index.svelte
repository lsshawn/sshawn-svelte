<script context="module">
    // fetch data. Can run on server or client side.
    export async function load({ fetch }) {
        const res = await fetch('/books.json'); // context.fetch()
        const { books } = await res.json();

        if (res.ok) {
            return {
                props: {
                    books
                }
            };
        }

        return {
            status: res.status,
            error: new Error('Could not fetch guides')
        };
    }
</script>

<script>
    export let books;
</script>

<h1 class="text-center">Book Notes</h1>

{#each books as book}
    <div>{book.slug}</div>
{/each}
