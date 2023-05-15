<script context="module">
    // @ts-ignore
    export const load = async ({ fetch, params }) => {
        const id = params.id;
        const res = await fetch(`/books/${id}.json`);
        const { book } = await res.json();
        return {
            props: { book }
        };
    };
</script>

<script>
    export let book;
    import { prettyDate } from '$lib/utils';
    import BackButton from '$lib/components/BackButton.svelte';
    import Seo from '$lib/components/seo.svelte';
    const seoProps = { title: `Book Summary: ${book.title}` };
</script>

<Seo {...seoProps} />
<div class="content-container prose">
    <BackButton />
    <div class="flex align-top justify-start items-start">
        <img
            src={book.featuredImage}
            alt={book.title}
            class="max-w-[200px] max-h-44 md:mt-0 my-0 ml-0 mr-8"
        />
        <div>
            <h2 class="card-title my-0">
                {book.title}
            </h2>
            <h3 class="text-gray-400">{book.author}</h3>
            <div>{prettyDate(book.date)}</div>
            <div>Rating: {book.rating} / 10</div>
        </div>
    </div>

    <div class="mt-12">
        {@html book.html}
    </div>
</div>
