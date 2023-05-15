<script context="module">
    // @ts-ignore
    export const load = async ({ fetch, params }) => {
        const id = params.id;
        const res = await fetch(`/blog/${id}.json`);
        const { post } = await res.json();
        return {
            props: { post }
        };
    };
</script>

<script>
    export let post;
    import { prettyDate } from '$lib/utils';
    import BackButton from '$lib/components/BackButton.svelte';
    import Seo from '$lib/components/seo.svelte';
    const seoProps = { title: post.title };
</script>

<Seo {...seoProps} />
<div class="content-container prose">
    <BackButton />

    <div class="card">
        <div class="card-body">
            <h1 class="card-title my-0">
                {post.title}
            </h1>
            <div>{prettyDate(post.date)}</div>
            {#if post.featuredImage}
                <img src={post.featuredImage} alt={post.title} class="mb-0" />
                {#if post.imageCreditURL}
                    <a
                        href={post.imageCreditURL}
                        class="no-underline italic text-gray-500 text-right"
                        target="_blank">Photo by {post.imageCredit}</a
                    >
                {/if}
            {/if}

            <div class="mt-12">
                {@html post.html}
            </div>
        </div>
    </div>
</div>
