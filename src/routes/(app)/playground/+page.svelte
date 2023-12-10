<script>
	import ArtImageGallery from '../../../components/art/ArtImageGallery.svelte'

	export let data
	let { artworkData } = data
	let artwork = artworkData.data
	let images = artwork.artwork_images_artworkId_fkey
</script>

<ArtImageGallery {images} />
