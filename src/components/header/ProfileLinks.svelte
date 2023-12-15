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

	let { data } = $page
	let { user } = data
</script>

<svelte:window bind:innerWidth on:click={onWindowClick} />

{#if !session}
	<a
		href="/auth/signup"
		class="w-full gap-2 flex justify-between items-center rounded-lg p-3 text-2xl font-light leading-6 text-inherit lg:text-sm lg:w-fit hover:bg-neutral/5"
		>Sign up <span class="hidden lg:inline" aria-hidden="true">&rarr;</span></a>
{:else}
	<div bind:this={container} class="flex items-center gap-4 py-2 lg:p-0 lg:dropdown">
		{#if !user.firstName}
			<div class="flex flex-col gap-4 w-52 lg:w-fit">
				<div class="flex gap-4 items-center">
					<div class="skeleton w-16 h-16 rounded-full shrink-0 lg:w-8 lg:h-8"></div>
					<div class="flex flex-col gap-4 lg:hidden">
						<div class="skeleton h-4 w-20"></div>
						<div class="skeleton h-4 w-28"></div>
					</div>
				</div>
			</div>
		{:else}
			<button
				on:click={toggleMenu}
				tabindex="0"
				class="rounded-full w-16 h-16 avatar cursor-default lg:w-8 lg:h-8 lg:cursor-pointer">
				<div class="rounded-full">
					<img
						alt="Tailwind CSS Navbar component"
						src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
				</div>
			</button>
			<div class="inline-block lg:hidden">
				<div class="text-xl">{user.firstName} {user.lastName}</div>
				<div>
					{user.email}
				</div>
			</div>
		{/if}
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
