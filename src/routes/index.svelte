<script context="module">
    //@ts-ignore
    export const load = async ({ url, fetch }) => {
        const page = url.searchParams.get('page') || 1;
        const res = await fetch(`/.json?page=${page}`);
        const { posts } = await res.json();
        return {
            props: { posts }
        };
    };
</script>

<script>
    import SEO from '$lib/components/seo.svelte';
    import { prettyDate } from '$lib/utils';
    const seoProps = { title: 'Home' };

    export let posts;
</script>

<SEO {...seoProps} />

<div class="content-container prose">
    {#each posts as post}
        <div class="card">
            <div class="card-body">
                <a
                    href={`/blog/${post.slug}`}
                    class="no-underline"
                    sveltekit:prefetch
                >
                    <h1 class="card-title">{post.title}</h1>
                </a>
                <div class="text-gray-500 text-xs">{prettyDate(post.date)}</div>
                {#if post.featuredImage}
                    <a
                        href={`/blog/${post.slug}`}
                        class="no-underline self-center"
                    >
                        <img
                            src={post.featuredImage}
                            class="max-h-[300px] object-contain mb-0"
                            alt="post.imageCredit"
                        />
                    </a>

                    {#if post.imageCredit}
                        <a
                            href={post.imageCreditURL || post.featuredImage}
                            class="no-underline italic text-gray-500 text-center text-xs"
                            target="_blank">Photo by {post.imageCredit}</a
                        >
                    {/if}
                {/if}
                <div class="post-excerpt">
                    {@html post.html}
                </div>

                <div class="card-actions justify-start">
                    <a href={`/blog/${post.slug}`} sveltekit:prefetch>
                        <button class="btn btn-primary"> Read more </button>
                    </a>
                </div>
            </div>
        </div>
        <div class="divider" />
    {/each}
</div>

<style>
    .post-excerpt {
        -webkit-mask-image: linear-gradient(
            to bottom,
            black 50%,
            transparent 100%
        );
        mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
        max-height: 40vh;
        overflow-y: hidden;
    }
</style>
