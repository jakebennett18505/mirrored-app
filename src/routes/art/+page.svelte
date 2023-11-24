<script>
	import ArtMasonGrid from '../_components/_art/ArtMasonGrid.svelte';
	export let data;
	const { products } = data;
</script>

<svelte:head>
	<title>Art</title>
	<meta name="description" content="A gallery of artwork" />
</svelte:head>

<section class="section">
	<div class="container">
		<ArtMasonGrid {products} />
	</div>
</section>
