<script>
	import { page } from '$app/stores'
	const { error, status } = $page

	console.log($page)
</script>

<main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
	<div class="text-center">
		<p class="text-2xl font-semibold">{status}</p>
		<h1 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
			{error.message}
		</h1>
		<div class="mt-10 flex items-center justify-center gap-x-6">
			<button onclick="history.back()" class="btn btn-primary">Go back</button>
		</div>
	</div>
</main>
