import { json } from '@sveltejs/kit'
import { supabase } from '../../../../lib/supabaseClient.js'

// api/art GET

export const GET = async (event) => {
	const { artistId } = event.params

	const artwork = await supabase
		.from('artworks')
		.select(
			`
	  *,
	  artwork_images_artworkId_fkey (
		*
	  )`
		)
		.eq('id', artistId)
		.single()

	event.setHeaders({
		'Cache-Control': 'max-age=60'
	})

	return json(artwork)
}
