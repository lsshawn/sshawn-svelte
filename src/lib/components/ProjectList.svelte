<script>
	import { projects } from '../../pages/projects.json'
</script>

<div>
	{#each projects as project}
		<div class="card lg:card-side bg-base-100 shadow-xl mb-12">
			<div class="card-body">
				<a href={project.url} target="_blank">
					{#if project.logo}
						<img src={project.logo} class="max-w-xs max-h-24 mx-auto mt-0" alt={project.title} />
					{:else}
						<h2 class="text-center mt-0">{project.title}</h2>
					{/if}
				</a>
				<div class="prose">
					{project.body}
				</div>
			</div>

			<figure>
				<a href={project.image} target="_blank">
					<img
						src={project.image}
						class="max-w-100 max-h-[400px] md:mt-0 mx-auto"
						alt={project.title}
					/>
				</a>
			</figure>
		</div>
	{/each}
</div>
