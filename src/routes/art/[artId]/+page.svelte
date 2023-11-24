<script>
	import ArtGallery from '../../_components/_art/ArtGallery.svelte';
	import SocialIcons from '../../_components/SocialIcons.svelte';

	export let data;
	const { artwork } = data;
</script>

<section class="section">
	<div class="container" data-type="narrow">
		<div class="grid">
			<div class="image-carousel">
				<ArtGallery {artwork} />
			</div>
			<img class="artwork-image" src={artwork.images[0]} alt="" />
			<SocialIcons />
		</div>
	</div>
</section>

<section class="section">
	<div class="container" data-type="narrow">
		<div class="flex-group">
			<div class="info-main flow">
				<div>
					<h1 class="subtitle-1">{artwork.title}</h1>
					<p class="subtitle-3 fw-bold">€{artwork.price}</p>
					<p class="subtitle-3">{artwork.brand}</p>
				</div>
				<p class="description">{artwork.description}</p>
			</div>
			<div class="specifications">
				<table>
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
				</table>
			</div>
		</div>
	</div>
</section>

<style>
	.grid {
		display: flex;
		gap: 2rem;
		justify-content: space-between;
		max-height: 600px;
		flex-direction: column; /* Apply mobile styles by default */
	}

	.image-carousel {
		overflow-y: scroll;
		-ms-overflow-style: none;
		scrollbar-width: none;
		display: none; /* Hide by default */
	}

	.image-carousel::-webkit-scrollbar {
		display: none;
	}

	.artwork-image {
		flex: 1;
		object-fit: contain;
		max-height: 400px; /* Mobile-first max-height */
	}

	th {
		text-align: left;
		font-weight: 600;
		padding-right: 5px;
	}

	.specifications {
		max-width: 350px;
	}

	.info-main {
		flex: 1;
		min-width: 65%; /* Mobile-first min-width */
	}

	@media (min-width: 45em) {
		/* Apply styles for screens wider than 45em (720px) */
		.grid {
			flex-direction: row;
		}

		.image-carousel {
			display: block; /* Display on screens wider than 45em */
		}

		.artwork-image {
			max-height: 100%; /* Adjust max-height for larger screens */
		}
	}
</style>
