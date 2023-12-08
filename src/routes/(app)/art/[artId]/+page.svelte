<script>
	// Import necessary components
	import ArtGallery from '/src/components/art/ArtGallery.svelte'
	import ArtSocialIcons from '/src/components/art/ArtSocialIcons.svelte'

	// Extract the 'artwork' data from the 'data' prop
	export let data
	const { artwork } = data
	const images = artwork.artwork_images
</script>

<!-- Artwork image section -->
<div class="flex flex-col">
	<section class="py-4 max-h-fit md:py-8">
		<div class="lg:max-w-[1000px] container">
			<div class="grid grid-col-1 gap-8 justify-center items-center max-h-fit md:flex-row">
				<div
					class="hidden max-w-full w-[120px] max-h-[600px] overflow-y-scroll no-scrollbar md:block">
					<ArtGallery {artwork} />
				</div>
				<img
					loading="lazy"
					class="bg-primary/20 w-full h-[400px] md:h-[600px] object-contain"
					src={images[0].imagePath}
					alt="Artwork" />
				<ArtSocialIcons />
			</div>
		</div>
	</section>

	<!-- Artwork information section -->
	<section class="py-4 md:py-8">
		<div class="container">
			<div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
				<div class="col-span-2 space-y-2">
					<div>
						<h3>{artwork.title}</h3>
						<h4>€{artwork.year}</h4>
					</div>
					<p>{artwork.description}</p>
				</div>
				<div class="col-span-1">
					<table class="table-auto">
						<tbody>
							<tr>
								<th>Painting:</th>
								<td>Acrylic on Canvas</td>
							</tr>
							<tr>
								<th>Size:</th>
								<td>61 W x 61 H x 3.8 D cm</td>
							</tr>
							<tr>
								<th>Created:</th>
								<td>2022</td>
							</tr>
							<tr>
								<th>Subjects:</th>
								<td>Abstract</td>
							</tr>
							<tr>
								<th>Materials:</th>
								<td>Canvas</td>
							</tr>
							<tr>
								<th>Styles:</th>
								<td>Abstract, Conceptual</td>
							</tr>
							<tr>
								<th>Mediums:</th>
								<td>Acrylic</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</section>
</div>
``

<style>
	th {
		text-align: left;
		padding-right: 5px;
	}
</style>
