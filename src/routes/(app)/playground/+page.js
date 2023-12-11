/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
	const response = await fetch('/api/artworks/1')
	const artworkData = await response.json()
	return { artworkData }
}
