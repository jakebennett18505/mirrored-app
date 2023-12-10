<script>
	export let artwork
	let images = artwork.artwork_images_artworkId_fkey
	console.log(images)
</script>

<div class="wrapper">
	{#each images as image}
		<img src={image.imagePath} alt="Something to see" />
	{/each}
</div>

<style>
	.wrapper {
		display: grid;
		grid-auto-rows: 100px;
		gap: 16px;
	}

	img {
		object-fit: cover;
		height: 100%;
		width: 100%;
	}
</style>
