/** @type {import('./$types').PageLoad} */

export async function load({ fetch, params }) {
	const { artId } = params
	const response = await fetch(`/api/artworks/${artId}`)
	const artworkData = await response.json()
	return { artworkData }
}
