<script>
	/** @type {import('./$types').PageData} */
	export let data;
	const { artist } = data

	console.log(artist);
</script>

<h1 class="heading-1">Hello, {artist.firstName}</h1>