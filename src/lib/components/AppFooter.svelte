<script lang="ts">
	import Twitter from '$lib/assets/icons/Twitter.svelte'
	import Email from '$lib/assets/icons/Email.svelte'
	import Telegram from '$lib/assets/icons/Telegram.svelte'
	import Github from '$lib/assets/icons/Github.svelte'
	import Linkedin from '$lib/assets/icons/Linkedin.svelte'
	const socialLinks = [
		{
			name: 'Twitter',
			url: 'https://twitter.com/me_sshawn'
		},
		{
			name: 'Telegram',
			url: 'https://t.me/lsshawn'
		},
		{
			name: 'Github',
			url: 'https://github.com/lsshawn'
		},
		{
			name: 'Linkedin',
			url: 'https://www.linkedin.com/in/shawnlim/'
		},
		{
			name: 'Email',
			url: 'mailto:l@sshawn.com'
		}
	]
</script>

<footer class="footer footer-center p-2 text-gray-400 mb-8">
	<div class="flex flex-col w-full">
		<div class="divider">
			<img src="/images/logo.png" class="w-20 aspect-square indefinite-wobble" alt="SShawn" />
		</div>
	</div>

	<div class="flex justify-around">
		{#each socialLinks as social}
			<a
				href={social.url}
				target="_blank"
				class="w-8 md:w-12 mx-6 hover:text-primary"
				rel="noopener"
				title={social.name}
			>
				{#if social.name === 'Twitter'}
					<Twitter />
				{:else if social.name === 'Github'}
					<Github />
				{:else if social.name === 'Email'}
					<Email />
				{:else if social.name === 'Telegram'}
					<Telegram />
				{:else if social.name === 'Linkedin'}
					<Linkedin />
				{/if}
			</a>
		{/each}
	</div>
</footer>
