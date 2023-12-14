import { supabase } from './supabaseClient'

export async function createArtwork(artwork) {
	const { data, error } = await supabase.from('artworks').insert([artwork]).select()

	if (error) {
		console.log(error)
		return { error }
	}

	return { data, message: 'Artwork created' }
}
