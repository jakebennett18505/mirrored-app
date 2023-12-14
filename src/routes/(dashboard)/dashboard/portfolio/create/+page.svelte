<script>
	export let data
	export let form
	import { enhance } from '$app/forms'

	$: ({ artworks, mediums, surfaces } = data)
</script>

<div class="space-y-4">
	<h2>This is a page to create artwork</h2>

	<form class="flex flex-col space-y-4" method="POST" action="?/createArtwork" use:enhance>
		<div>
			<label for="title" class="label-text">Title</label>
			<input
				type="text"
				name="title"
				id="title"
				value={form?.title ?? ''}
				class="input input-bordered w-full"
				placeholder="The Mona Lisa" />
			<!-- {#if form?.error.includes('title')}
				<p class={form?.error.includes('title') ? 'text-error' : ''}>You forgot the title, yo!</p>
			{/if} -->
		</div>
		<div>
			<label for="medium" class="label-text">Medium</label>
			<select name="medium" id="medium" class="select block select-bordered w-full">
				{#each mediums?.data as medium}
					<option value={medium.id} selected>{medium.name}</option>
				{/each}
			</select>
		</div>
		<div>
			<label for="surface" class="label-text">Surface</label>
			<select name="surface" id="surface" class="select block select-bordered w-full">
				{#each surfaces?.data as surface}
					<option value={surface.id} selected>{surface.name}</option>
				{/each}
			</select>
		</div>
		<button type="submit" class="btn btn-primary max-w-xs">Create</button>
		{#if form?.error}
			<p>{form.message}</p>
		{/if}
	</form>
	<pre>{JSON.stringify(form, null, 2)}</pre>
	<ul class="space-y-2">
		{#each artworks?.data as artwork}
			<div class="flex w-full max-w-sm justify-between">
				<li>{artwork.title}</li>
				<form action="?/deleteArtwork" method="POST" use:enhance>
					<input name="id" type="hidden" value={artwork.id} />
					<button type="submit" class="btn btn-error btn-xs">Delete</button>
				</form>
			</div>
		{/each}
	</ul>
</div>
