<script>
	import { onMount } from 'svelte'
	import { userStore } from '$lib/stores.js'
	import { page } from '$app/stores'
	import { invalidate } from '$app/navigation'
	import '/src/app.css'

	export let data

	//Supabase auth logic
	let user
	let { supabase, session } = data
	$: ({ supabase, session } = data)

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth')
			}
		})

		return () => subscription.unsubscribe()
	})

	onMount(async () => {
		try {
			const response = await fetch(`/api/users/${session.user.id}`)
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`)
			}
			user = await response.json()
			userStore.set(user)
		} catch (error) {
			console.error('Error in getUser:', error)
		}
	})
</script>

<slot />
