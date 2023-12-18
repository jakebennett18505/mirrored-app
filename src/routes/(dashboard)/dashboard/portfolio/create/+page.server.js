/** @type {import('./$types').PageServerLoad} */
import { supabase } from '$lib/supabaseClient.js'
import { createArtwork } from '$lib/database.js'
// import { fail } from '@sveltejs/kit'

export const load = async () => {
	const getMediums = async () => {
		const mediums = await supabase.from('mediums').select(`*`).order('id', { ascending: true })
		return mediums
	}

	const getSurfaces = async () => {
		const surfaces = await supabase.from('surfaces').select(`*`).order('id', { ascending: true })
		return surfaces
	}


	return {
		mediums: getMediums(),
		surfaces: getSurfaces()
	}
}

export const actions = {
	createArtwork: async ({ request }) => {
		const formData = await request.formData()

		const artistId = 23
		const title = formData.get('title')
		const medium = formData.get('medium')
		const surface = formData.get('surface')

		const artwork = {
			artistId: artistId,
			title: title,
			mediumId: Number(medium),
			surfaceId: Number(surface)
		}

		if (title.length < 2) {
			return {
				error: true,
				message: 'Title must be at least 2 characters',
				artwork
			}
		}

		createArtwork(artwork)
		return {
			success: true
		}
	},

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
