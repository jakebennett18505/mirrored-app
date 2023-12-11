<script>
	export let artwork
</script>

<a class="max-w-full" href="/art/{artwork.id}">
	<div class="rounded-md inline-block w-full my-6">
		<img
			class="rounded-md shadow-xl object-cover mb-4 w-full"
			src={artwork.artwork_images.imagePath}
			alt="" />
		<p class="text-2xl font-light truncate dark:text-white">{artwork.title}</p>
		<p class="text-xl font-light dark:text-white">€{artwork.price}</p>
	</div>
</a>

<style>
</style>
