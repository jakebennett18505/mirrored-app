/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
	const response = await fetch('/api/artworks')
	const artworks = await response.json()
	return { artworks }
}
