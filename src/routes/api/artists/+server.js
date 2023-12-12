import { json } from '@sveltejs/kit'
import { supabase } from '../../../lib/supabaseClient.js'

// api/art GET

export const GET = async (event) => {
	const data = await supabase.from('artists').select('*', { count: 'exact' })

	event.setHeaders({
		'Cache-Control': 'max-age=600'
	})

	return json(data)
}
