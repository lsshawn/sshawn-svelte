<script context="module">
    // @ts-ignore
    export const load = async ({ url, fetch }) => {
        const page = url.searchParams.get('page') || 1;
        const res = await fetch(`./books.json?page=${page}`);
        const { books } = await res.json();
        return {
            props: { books }
        };
    };
</script>

<script>
    import Seo from '$lib/components/seo.svelte';
    import { prettyDate } from '$lib/utils';
    export let books;
    const seoProps = { title: 'Book Summary' };
</script>

<Seo {...seoProps} />
<div class="content-container prose">
    <h1 class="text-center">Book Summary</h1>

    {#each books as book}
        <div>
            {#if book}
                <a
                    href={`/books/${book.slug}`}
                    class="no-underline"
                    sveltekit:prefetch
                >
                    <div
                        class="card card-side bg-base-100 shadow-xl mb-12
hover:bg-base-200 transition-all duration-200 hover:-translate-y-1
          "
                    >
                        <img
                            src={book.featuredImage}
                            alt={book.title}
                            class="max-w-[180px] max-h-44 md:max-h-96 my-0 mx-auto"
                        />
                        <div class="card-body">
                            <h2 class="card-title my-0">
                                {book.title}
                            </h2>
                            <h3 class="text-gray-400 mt-0">{book.author}</h3>
                            <div>{prettyDate(book.date)}</div>
                            <div>Rating: {book.rating} / 10</div>
                            <div>{book.summary}</div>

                            <div class="card-actions justify-start mt-12">
                                <button
                                    class="btn btn-primary text-black font-medium"
                                >
                                    Read summary
                                </button>
                            </div>
                        </div>
                    </div>
                </a>
            {/if}
        </div>
    {/each}
</div>
