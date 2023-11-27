<script>
	import ArtMasonGrid from '/src/components/art/ArtMasonGrid.svelte';
	export let data;
	const { art } = data;
</script>

<svelte:head>
	<title>Art</title>
	<meta name="description" content="A gallery of artwork" />
</svelte:head>

<section class="section">
	<div class="container">
		<ArtMasonGrid {art} />
	</div>
</section>
