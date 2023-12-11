import { json } from '@sveltejs/kit'
import { supabase } from '../../../../lib/supabaseClient.js'

// api/art GET

export const GET = async (event) => {
	const { artworkId } = event.params

	console.log(artworkId)
	const artwork = await supabase
		.from('artworks')
		.select(
			`
	  *,
	  artwork_images_artworkId_fkey (
		*
	  )`
		)
		.eq('id', artworkId)
		.single()

	event.setHeaders({
		'Cache-Control': 'max-age=60'
	})

	return json(artwork)
}
