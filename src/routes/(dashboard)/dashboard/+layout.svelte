<script>
	import DashboardSidebar from './DashboardSidebar.svelte'

	import { dashboardMenu, userStore } from '$lib/stores.js'
	import Logo from '/src/components/Logo.svelte'
	import { MenuIcon } from 'svelte-feather-icons'

	let sidebarVisible = false

	function toggleSidebar() {
		$dashboardMenu = !$dashboardMenu
	}
</script>

<!-- component -->
<body
	style="height: 600px"
	class="bg-base-100 p-5 antialiased !p-0 {$dashboardMenu ? 'overflow-hidden' : ''}">
	<div class="wrapper">
		<nav class="fixed top-0 z-50 w-full border-b bg-base-100 border-neutral/10">
			<div class="px-3 py-3 lg:px-5 lg:pl-3">
				<div class="flex items-center justify-between">
					<div class="flex items-center justify-start rtl:justify-end">
						<button
							on:click={toggleSidebar}
							type="button"
							class="inline-flex items-center p-2 text-sm rounded-lg sm:hidden hover:bg-neutral/5 focus:outline-none">
							<span class="sr-only">Open sidebar</span>
							<MenuIcon />
						</button>
						<div class="flex ms-2 md:me-24">
							<Logo />
						</div>
					</div>
				</div>
			</div>
		</nav>

		<DashboardSidebar />

		<div class="p-4 sm:ml-64">
			<!-- Content area -->
			<div class="p-4 mt-14">
				<slot />
			</div>
		</div>
	</div>
	{#if $dashboardMenu}
		<div on:click={toggleSidebar} class="bg-neutral/50 dark:bg-neutral/10 fixed inset-0 z-30"></div>
	{/if}
</body>
