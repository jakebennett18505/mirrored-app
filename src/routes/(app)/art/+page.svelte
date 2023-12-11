<script>
	export let data

	$: artworks = data.artworks.data
	$: count = data.artworks.count

	import ArtCard from '/src/components/art/ArtCard.svelte'
</script>

<svelte:head>
	<title>Art</title>
	<meta name="description" content="A gallery of artwork" />
</svelte:head>

<div class="container">
	<h2>Artworks</h2>

	<div class="space-y-4">
		Showing {count}
		<div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
			{#each artworks as artwork}
				<ArtCard {artwork} />
			{/each}
		</div>
	</div>
</div>

<style>
</style>
