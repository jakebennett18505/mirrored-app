<script>
	import DashboardNavItem from './DashboardNavItem.svelte'

	import { dashboardSidebar, userStore, dashboardSidebarCollapsed } from '$lib/stores.js'
	import { ChevronsLeftIcon, ChevronsRightIcon } from 'svelte-feather-icons'
	import { beforeNavigate } from '$app/navigation'

	import ThemeToggle from '/src/components/ThemeToggle.svelte'

	beforeNavigate(() => ($dashboardSidebar = false))

	function toggleSidebar() {
		$dashboardSidebar = !$dashboardSidebar
	}
	function toggleSidebarCollapse() {
		$dashboardSidebarCollapsed = !$dashboardSidebarCollapsed
	}

	const navItems = [
		{ name: 'Dashboard', link: '/dashboard' },
		{ name: 'Portfolio', link: '/dashboard/portfolio' },
		{
			name: 'Two',
			link: '',
			sublinks: [
				{ name: 'Drowdown 1', link: '/dashboard/two' },
				{ name: 'Drowdown 2', link: '/dashboard/two' },
				{ name: 'Drowdown 3', link: '/dashboard/two' }
			]
		}
	]
</script>

<aside
	id="logo-sidebar"
	class="fixed top-0 left-0 z-40 {$dashboardSidebarCollapsed
		? 'w-fit'
		: 'w-64'} h-screen pt-20 transition-transform {$dashboardSidebar
		? 'transform-none'
		: '-translate-x-full'} bg-base-100 border-r border-neutral/10 lg:translate-x-0"
	aria-label="Sidebar">
	<div class="overflow-y-auto py-5 px-3 h-full bg-base-100 relative">
		<ul class="space-y-2">
			{#each navItems as item}
				<DashboardNavItem {item} />
			{/each}
		</ul>
		<ul class="pt-5 mt-5 space-y-2 border-t border-neutral/10">
			<DashboardNavItem item={{ name: 'Settings', link: '/dashboard/settings' }} />
		</ul>
		<div class="flex flex-col absolute bottom-3">
			<button
				type="button"
				class="inline-flex items-center p-2 text-sm rounded-lg hover:bg-neutral/5 focus:outline-none">
				<span class="sr-only">Change theme</span>
				<ThemeToggle />
			</button>
			<!-- <button
				on:click={toggleSidebarCollapse}
				type="button"
				class="inline-flex items-center p-2 text-sm rounded-lg hover:bg-neutral/5 focus:outline-none">
				<span class="sr-only">Collapse sidebar</span>
				{#if !$dashboardSidebarCollapsed}
					<ChevronsLeftIcon />
				{:else}
					<ChevronsRightIcon />
				{/if}
			</button> -->
		</div>
	</div>
</aside>
