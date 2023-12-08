import { supabase } from '$lib/supabaseClient'

export async function load({ params }) {
	let artId = params.artId
	let { data, error } = await supabase
		.from('artworks')
		.select('*, artwork_images (imagePath) ')
		.eq('id', artId)
		.single()

	console.log(data, error)

	return {
		artwork: data ?? []
	}
}
