<script>
	export let data
	export let form
	import { enhance } from '$app/forms'

	$: ({ mediums, surfaces } = data)
</script>

<div class="space-y-4">
	<h2>This is a page to create artwork</h2>

	<form class="flex flex-col space-y-4" method="POST" action="?/createArtwork" use:enhance>
		<div>
			<label for="title" class="label-text">Title</label>
			<input
				required
				type="text"
				name="title"
				id="title"
				value={form?.artwork.title ?? ''}
				class="input input-bordered w-full"
				placeholder="The Mona Lisa" />
		</div>
		<div>
			<label for="medium" class="label-text">Medium</label>
			<select
				required
				name="medium"
				id="medium"
				value={form?.artwork.mediumId ?? ''}
				class="select block select-bordered w-full">
				<option value="">Select medium</option>
				{#each mediums?.data as medium}
					<option value={medium.id}>{medium.name}</option>
				{/each}
			</select>
		</div>
		<div>
			<label for="surface" class="label-text">Surface</label>
			<select
				required
				name="surface"
				id="surface"
				value={form?.artwork.surfaceId ?? ''}
				class="select block select-bordered w-full">
				<option value="">Select surface</option>
				{#each surfaces?.data as surface}
					<option value={surface.id}>{surface.name}</option>
				{/each}
			</select>
		</div>
		<button type="submit" class="btn btn-primary max-w-xs">Create</button>
		{#if form?.error}
			<p>{form.message}</p>
		{/if}
	</form>
	<pre>{JSON.stringify(form, null, 2)}</pre>
</div>
