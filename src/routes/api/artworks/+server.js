import { json } from '@sveltejs/kit'
import { supabase } from '../../../lib/supabaseClient.js'

// api/art GET

export const GET = async (event, searchParams) => {
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
	`,
			{ count: 'exact' }
		)
		.order('id', { ascending: true })

	event.setHeaders({
		'Cache-Control': 'max-age=60'
	})

	return json(artworks)
}

// api/art POST
