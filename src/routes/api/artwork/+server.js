import { json } from '@sveltejs/kit'
import { supabase } from '../../../lib/supabaseClient.js'

// api/art GET

export const GET = async (event) => {
	const artworks = await supabase
		.from('artworks')
		.select(
			`
	  *,
	  artwork_images!artworks_titleImageId_fkey (
		imagePath
	  )
	`
		)
		.order('id', { ascending: true })

	return json(artworks)
}

// api/art POST
