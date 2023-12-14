<script>
	import { userStore } from '$lib/stores.js'
	import { PlusCircleIcon, MoreVerticalIcon } from 'svelte-feather-icons'
	import ArtCard from '../../../../components/art/ArtCard.svelte'

	export let data
	let artworks = data.artworks.data

	console.log(artworks)

	let headerClass = 'py-3.5 px-4 text-sm font-normal text-left whitespace-nowrap'
	let rowClass = 'p-4 text-sm whitespace-nowrap'
</script>

<section class="">
	<!-- Header -->
	<div class="md:flex md:items-center md:justify-between">
		<div>
			<div class="flex items-center gap-x-3">
				<h5>Artwork</h5>

				<span class="px-3 py-1 text-xs text-info bg-info/10 rounded-full dark:bg-gray-800"
					>{artworks.length} artworks</span>
			</div>

			<p class="mt-1 text-sm">Manage your portfolio of art.</p>
		</div>

		<div class="flex items-center mt-4 gap-x-3">
			<a href="portfolio/create" class="btn btn-primary">
				<PlusCircleIcon size="16" />

				<span>Add artwork</span>
			</a>
		</div>
	</div>

	<!-- Toolbar and search -->
	<!-- <div class="mt-6 md:flex md:items-center md:justify-between">
			<div
				class="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
				<button
					class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm dark:bg-gray-800 dark:text-gray-300">
					View all
				</button>

				<button
					class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
					Monitored
				</button>

				<button
					class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
					Unmonitored
				</button>
			</div>

			<div class="relative flex items-center mt-4 md:mt-0">
				<span class="absolute">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
					</svg>
				</span>

				<input
					type="text"
					placeholder="Search"
					class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
			</div>
		</div> -->

	<!-- Table -->
	<div class="flex flex-col mt-6">
		<div class=" -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
				<div class="overflow-hidden border border-neutral/10 md:rounded-lg">
					<table class="min-w-full divide-y divide-neutral/5">
						<thead class="bg-neutral/5">
							<tr>
								<th scope="col" class={headerClass}> Title </th>

								<th scope="col" class={headerClass}> Price </th>
								<th scope="col" class={headerClass}> Year </th>
								<th scope="col" class={headerClass}> Medium </th>
								<th scope="col" class={headerClass}> Surface </th>
								<th scope="col" class={headerClass}> Width </th>
								<th scope="col" class={headerClass}> Height </th>
								<th scope="col" class="relative py-3.5 px-2">
									<span class="sr-only">Edit</span>
								</th>
							</tr>
						</thead>
						<tbody class="bg-base-100 divide-y divide-neutral/5">
							{#each artworks as artwork}
								<tr>
									<td class={rowClass}>
										<p class="text-lg font-medium">{artwork.title}</p>
									</td>
									<td class={rowClass}>
										<p>€{artwork.price}</p>
									</td>
									<td class={rowClass}>
										<p>{artwork.year}</p>
									</td>
									<td class={rowClass}>
										{#if artwork.mediums.name}
											<p>{artwork.mediums.name}</p>
										{/if}
									</td>
									<td class={rowClass}>
										{#if artwork.surfaces.name}
											<p>{artwork.surfaces.name}</p>
										{/if}
									</td>
									<td class={rowClass}>
										<p>{artwork.width} cm</p>
									</td>
									<td class={rowClass}>
										<p>{artwork.height} cm</p>
									</td>

									<td class="px-2 py-4 text-sm">
										<button
											class="px-1 py-1 transition-colors duration-200 rounded-lg hover:bg-neutral/5">
											<MoreVerticalIcon strokeWidth="1" />
										</button>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>

	<!-- Pagination -->
	<div class="mt-6 sm:flex sm:items-center sm:justify-between">
		<div class="text-sm text-gray-500 dark:text-gray-400">
			Page <span class="font-medium text-gray-700 dark:text-gray-100">1 of 10</span>
		</div>

		<div class="flex items-center mt-4 gap-x-4 sm:mt-0">
			<a
				href="#"
				class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-5 h-5 rtl:-scale-x-100">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
				</svg>

				<span> previous </span>
			</a>

			<a
				href="#"
				class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
				<span> Next </span>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-5 h-5 rtl:-scale-x-100">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
				</svg>
			</a>
		</div>
	</div>
</section>
