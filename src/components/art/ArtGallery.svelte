<script>
	export let artwork;
</script>

<div class="wrapper">
	{#each artwork.images as image}
		<img src={image} alt="Something to see" />
        {/each}
        <div class="image"></div>
        <div class="image"></div>
</div>

<style>
	.wrapper {
		display: grid;
		grid-auto-rows: 100px;
		min-width: 100px;
		gap: 16px;
	}

	img {
		object-fit: cover;
		height: 100%;
		width: 100%;
	}

	.image {
		background-color: red;
	}
</style>
