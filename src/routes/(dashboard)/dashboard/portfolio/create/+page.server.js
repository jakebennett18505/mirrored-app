/** @type {import('./$types').PageServerLoad} */
import { supabase } from '$lib/supabaseClient.js'
import { createArtwork } from '$lib/database.js'
// import { fail } from '@sveltejs/kit'

export const load = async () => {
	const getMediums = async () => {
		const mediums = await supabase.from('mediums').select(`*`)
		return mediums
	}

	const getSurfaces = async () => {
		const surfaces = await supabase.from('surfaces').select(`*`)
		return surfaces
	}

	const getArtworks = async () => {
		const artworks = await supabase
			.from('artworks')
			.select(
				`
			id,
			createdAt,
			artistId,
			title,
			year,
			price,
			width,
			height,
			artwork_images!artworks_titleImageId_fkey (
				imagePath
				), 
				mediums(name),
				surfaces(name)
				`
			)
			.order('id', { ascending: false })

		return artworks
	}

	return {
		artworks: getArtworks(),
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
			mediumId: medium,
			surfaceId: surface
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
