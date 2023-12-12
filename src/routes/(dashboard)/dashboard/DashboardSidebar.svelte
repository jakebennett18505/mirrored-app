<script>
	import DashboardNavItem from './DashboardNavItem.svelte'

	import { dashboardMenu, userStore } from '$lib/stores.js'
	import { beforeNavigate } from '$app/navigation'

	import ThemeToggle from '/src/components/ThemeToggle.svelte'

	let sidebarVisible = false

	beforeNavigate(() => ($dashboardMenu = false))

	function toggleSidebar() {
		$dashboardMenu = !$dashboardMenu
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
	class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform {$dashboardMenu
		? 'transform-none'
		: '-translate-x-full'} bg-base-100 border-r border-neutral/10 sm:translate-x-0"
	aria-label="Sidebar">
	<div class="overflow-y-auto py-5 px-3 h-full bg-base-100">
		<ul class="space-y-2">
			{#each navItems as item}
				<DashboardNavItem {item} />
			{/each}
		</ul>
		<ul class="pt-5 mt-5 space-y-2 border-t border-neutral/10">
			<DashboardNavItem item={{ name: 'Settings', link: '/dashboard/settings' }} />
		</ul>
	</div>
	<div class="absolute left-5 bottom-3">
		<ThemeToggle />
	</div>
</aside>
