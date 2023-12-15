/** @type {import('./$types').PageLoad} */

import { supabase } from '$lib/supabaseClient.js'

export async function load({ fetch }) {
	const response = await fetch('/api/artworks')
	const artworks = await response.json()
	return { artworks }
}

export const actions = {
	deleteArtwork: async ({ request }) => {
		const formData = await request.formData()
		const artworkId = formData.get('id')

		const { error } = await supabase.from('artworks').delete().eq('id', artworkId)

		if (error) {
			return { error }
		}

		return {
			success: true
		}
	}
}
