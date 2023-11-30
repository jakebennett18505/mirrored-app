/** @type {import('./$types').PageLoad} */

import { dev } from '$app/environment';

export const csr = dev;

export async function load({fetch}){
	const response = await fetch('https://dummyjson.com/products?limit=50');
	const artData = await response.json();
	const art = artData.products

	return {
		art
	};
}
