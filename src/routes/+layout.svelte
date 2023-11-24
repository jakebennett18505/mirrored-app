<script>
	import Header from './_components/head/Header.svelte';
	import Footer from './_components/Footer.svelte';
	// import './styles.css';
</script>

<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width" />
		<!-- Primary Meta Tags -->
		<title>Svelte impressd project</title>
		<meta name="title" content="Svelte impressd project" />
	</head>
	<body>
		<Header />
		<main>
			<slot />
		</main>
		<Footer />
	</body>
</html>

<style type="text/scss" global>
	@import '/src/sass/main.scss';
</style>
