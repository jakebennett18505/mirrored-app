// src/routes/+layout.server.js
import { supabase } from '../lib/supabaseClient.js'

export const load = async ({ locals: { getSession } }) => {
	const session = await getSession()

	if (session) {
		//Fetching auth.users data (email)
		const authUser = session?.user
		const { email, id } = authUser

		//Fetching public.users data (Name, city, etc)
		const { data, error } = await supabase
			.from('users')
			.select('*, artists(*)')
			.eq('id', id)
			.single()

		if (error) {
      console.log(error);
			return { error, session }
		}

		const user = { ...data, email }

		return {
			session,
			user
		}
	} else {
		return {
			session
		}
	}
}
