<script>
    import { projects } from '../../content/now/projects.json';
</script>

<div>
    {#each projects as project}
        <a href={project.url} target="_blank">
            {#if project.logo}
                <img
                    src={project.logo}
                    class="max-w-xs max-h-24 mx-auto"
                    alt={project.title}
                />
            {:else}
                <h2 class="text-center">{project.title}</h2>
            {/if}
        </a>
        <div class="md:grid grid-cols-2">
            <div class="prose">
                {project.body}
            </div>

            <a href={project.image} target="_blank">
                <img
                    src={project.image}
                    class="max-w-100 max-h-[400px] md:mt-0 mx-auto"
                    alt={project.title}
                />
            </a>
        </div>
    {/each}
</div>
