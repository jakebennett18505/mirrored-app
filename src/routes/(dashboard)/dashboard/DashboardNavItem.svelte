<script>
	import { dashboardMenu, userStore } from '$lib/stores.js'
	import { beforeNavigate } from '$app/navigation'
	import { ChevronDownIcon } from 'svelte-feather-icons'

	export let showDropdown = false

	// beforeNavigate(() => (showDropdown = false))

	function toggleDropdown() {
		showDropdown = !showDropdown
	}

	export let item = {
		name: 'Example',
		link: '/example',
		sublinks: [
			{ name: 'Drowdown 1', link: '/dashboard' },
			{ name: 'Drowdown 2', link: '/dashboard' },
			{ name: 'Drowdown 3', link: '/dashboard' }
		]
	}

	let buttonClass =
		'flex items-center p-2 w-full text-base font-medium rounded-lg transition duration-75 group hover:bg-neutral/5'
</script>

{#if item.sublinks}
	<li>
		<button
			type="button"
			on:click={toggleDropdown}
			class={buttonClass}
			aria-controls="dropdown-pages"
			data-collapse-toggle="dropdown-pages">
			<svg
				aria-hidden="true"
				class="flex-shrink-0 w-6 h-6 transition duration-75"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg">
				<path
					fill-rule="evenodd"
					d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
					clip-rule="evenodd"></path>
			</svg>
			<span class="flex-1 ml-3 text-left whitespace-nowrap">Dropdown</span>
			<ChevronDownIcon />
		</button>

		<ul id="dropdown-pages" class="{showDropdown ? '' : 'hidden'} py-2 space-y-2">
			{#each item.sublinks as sublink}
				<li>
					<a href={sublink.link} class="pl-11 {buttonClass}">{sublink.name}</a>
				</li>
			{/each}
		</ul>
	</li>
{:else}
	<li>
		<a href={item.link} class={buttonClass}>
			<svg
				aria-hidden="true"
				class="w-6 h-6 transition duration-75 "
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg">
				<path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
				<path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
			</svg>
			<span class="ml-3">{item.name}</span>
		</a>
	</li>
{/if}
