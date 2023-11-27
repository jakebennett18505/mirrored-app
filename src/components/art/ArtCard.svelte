<script>
	export let artwork;
</script>

<a href="/art/{artwork.id}">
	<div class="item">
		<img src={artwork.images[0]} alt="Something to see" />
		<p class="subtitle-3">{artwork.title}</p>
		<p class="subtitle-3 fs-400">€{artwork.price}</p>
	</div>
</a>

<style>
	.item {
		display: inline-block;
		margin-block: 1.5em;
		background: #fff;
		width: 100%;
		transition: 1s ease all;
		box-sizing: border-box;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
	}
	.item img {
		max-width: 100%;
	}
</style>
