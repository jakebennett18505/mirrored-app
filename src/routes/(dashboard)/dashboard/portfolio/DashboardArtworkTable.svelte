<script>
	import { enhance } from '$app/forms'
	import { PlusCircleIcon, MoreVerticalIcon } from 'svelte-feather-icons'

	export let artworks

	let headerClass = 'py-3.5 px-4 text-sm font-normal text-left whitespace-nowrap'
	let rowClass = 'p-4 text-sm whitespace-nowrap'
</script>

<div class="flex flex-col mt-6">
	<div class=" -my-2 overflow-x-auto">
		<div class="inline-block min-w-full py-2 align-middle">
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
									<form action="?/deleteArtwork" method="POST" use:enhance>
										<input name="id" type="hidden" value={artwork.id} />
										<button type="submit" class="btn btn-error btn-xs">Delete</button>
									</form>
								</td>
							</tr>
						{/each}
					</tbody>
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
				</table>
			</div>
		</div>
	</div>
</div>
