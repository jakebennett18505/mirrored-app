import { json } from '@sveltejs/kit'
import { supabase } from '../../../../lib/supabaseClient.js'

// api/art GET

export const GET = async (event) => {
	const { artistId } = event.params

	const { data, error } = await supabase.from('artists').select('* ').eq('id', artistId).single()

	event.setHeaders({
		'Cache-Control': 'max-age=600'
	})

	if (error) {
		return json(error)
	}
	return json(data)
}
