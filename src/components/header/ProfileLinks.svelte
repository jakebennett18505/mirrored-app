<script>
	import { page } from '$app/stores'
	import { signOut } from '../auth.js'

	const { session, supabase } = $page.data
	const profileLinks = ['Profile', 'Settings']
	let container
	let innerWidth

	$: show = innerWidth < 1024

	async function handleSignOut() {
		await signOut(supabase)
	}

	function toggleMenu() {
		if (innerWidth > 1024) {
			show = !show
		}
	}

	function onWindowClick(e) {
		if (innerWidth > 1024 && show) {
			if (container.contains(e.target) == false) show = false
		}
	}
</script>

<svelte:window bind:innerWidth on:click={onWindowClick} />

{#if !session}
	<a
		href="/auth/signup"
		class="w-full gap-2 flex justify-between items-center rounded-lg p-3 text-2xl font-light leading-6 text-inherit lg:text-sm lg:w-fit hover:bg-neutral/5"
		>Sign up <span class="hidden lg:inline" aria-hidden="true">&rarr;</span></a>
{:else}
	<div bind:this={container} class="flex items-center gap-4 py-2 lg:p-0 lg:dropdown">
		<button on:click={toggleMenu} tabindex="0" class="rounded-full w-16 h-16 lg:w-8 lg:h-8 avatar">
			<div class="rounded-full">
				<img
					alt="Tailwind CSS Navbar component"
					src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
			</div>
		</button>
		<div class="inline-block lg:hidden">
			<div class="text-xl">Jane Doe</div>
			<div>
				{session.user.email}
			</div>
		</div>
	</div>
	{#if show}
		<div
			class="mt-2 flex flex-col bg-base-100 p-2 lg:absolute lg:mt-12 lg:z-1 lg:w-[200px] lg:rounded-3xl lg:shadow-2xl">
			{#each profileLinks as link}
				<a
					href={link.toLowerCase()}
					class="-ml-3 block rounded-lg px-3 py-2 text-lg font-light leading-6 lg:m-0 lg:text-sm hover:bg-neutral/5">
					{link}
				</a>
			{/each}
			<button
				on:click={handleSignOut}
				class="text-left -ml-3 block rounded-lg px-3 py-2 text-lg font-light leading-6 lg:m-0 lg:text-sm hover:bg-neutral/5"
				>Logout
			</button>
		</div>
	{/if}
{/if}

<style>
</style>
