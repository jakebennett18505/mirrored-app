<script>
	import { InstagramIcon } from 'svelte-feather-icons'
	import Logo from '/src/components/Logo.svelte'
	import ThemeToggle from '../ThemeToggle.svelte'

	const footerLinks = [
		{
			name: 'About',
			link: '/about'
		},
		{
			name: 'FAQs',
			link: '/faq'
		},
		{
			name: 'Become a location',
			link: '/for-locations'
		},
		{
			name: 'Privacy Policy',
			link: '/privacy'
		},
		{
			name: 'Exhibition Policy',
			link: '/exhibition'
		},
		{
			name: 'imprint',
			link: '/imprint'
		}
	]
</script>

<svelte:head>
	<script>
		try {
			document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'))
		} catch (e) {}
	</script>
</svelte:head>

<footer class="footer container footer-center p-10 rounded">
	<div class="mx-auto max-w-screen-xl text-center">
		<Logo />
		<nav class="justify-center flex flex-wrap gap-4">
			{#each footerLinks as link}
				<a class="link link-hover" href={link.link}>{link.name}</a>
			{/each}
		</nav>
	</div>
	<div class="border-t pt-4 w-full sm:flex sm:items-center sm:justify-between">
		<span class="block text-sm sm:text-cente">
			&copy; 2023 <a href="/" class="hover:underline"> impressd</a> All Rights Reserved.
		</span>
		<div class="flex mt-4 items-center space-x-2 sm:justify-center sm:mt-0">
			<a target="_blank" href="https://www.instagram.com/impressd.de/">
				<InstagramIcon class="w-6 h-6 hover:text-neutral" />
			</a>
			<ThemeToggle />
		</div>
	</div>
</footer>
