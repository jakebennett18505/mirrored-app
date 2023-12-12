<script>
	import '/src/app.css'
	import ThemeToggle from '/src/components/ThemeToggle.svelte'
	import Logo from '../../../components/Logo.svelte'
</script>

<main class="grid grid-cols-1 lg:grid-cols-2">
	<div class="absolute z-10 left-4 top-4">
		<ThemeToggle />
	</div>
	<div class="flex flex-col items-center justify-center gap-4">
		<Logo size="large" />
		<slot />
	</div>
	<div class="auth-image bg-base-100/30 hidden lg:block"></div>
</main>

<style>
	.auth-image {
		background-image: url('$lib/images/auth_image_1.webp');
		background-size: cover;
		background-blend-mode: darken;
	}
</style>
