<script>
	/** @type {import('./$types').PageData} */
	import { userStore } from '$lib/stores.js'

	

	export let data
</script>

<h2>Welcome, {$userStore.firstName || 'stranger'}!</h2>
