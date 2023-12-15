<script>
	/** @type {import('./$types').PageData} */

	export let data
	let { user } = data
</script>

<h2>Welcome, {user?.firstName || 'stranger'}!</h2>
