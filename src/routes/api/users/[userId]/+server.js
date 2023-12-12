import { json } from '@sveltejs/kit'
import { supabase } from '../../../../lib/supabaseClient.js'

// api/art GET

export const GET = async (event) => {
	const { userId } = event.params
	const { getSession } = event.locals
	const session = await getSession()

	const { data, error } = await supabase.from('users').select('*').eq('id', userId).single()

	event.setHeaders({
		'Cache-Control': 'max-age=600'
	})

	if (error) {
		return json(error)
	}

	if (session) {
		const auth = session.user
		const authObject = { auth }

		const combinedData = { ...data, ...authObject }

		return json(combinedData)
	} else {
		return json(data)
	}
}
