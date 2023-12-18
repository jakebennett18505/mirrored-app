<script>
	// Import necessary components
	import ArtImageGallery from '../../../../components/art/ArtImageGallery.svelte'
	import ArtSocialIcons from '/src/components/art/ArtSocialIcons.svelte'

	// Extract the 'artwork' data from the 'data' prop
	export let data
	let { artworkData } = data
	let artwork = artworkData.data
	let images = artwork.artwork_images_artworkId_fkey
</script>

<!-- Artwork image section -->
<div class="flex flex-col">
	<section class="py-4 max-h-fit md:py-8">
		<div class="container">
			<div class="flex gap-8 h-fit justify-between">
				<ArtImageGallery {images} />
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
						<h4>€{artwork.price}</h4>
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

<style>
	th {
		text-align: left;
		padding-right: 5px;
	}
</style>
