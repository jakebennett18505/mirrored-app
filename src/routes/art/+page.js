/** @type {import('./$types').PageLoad} */

import { dev } from '$app/environment';

export const csr = dev;

export async function load({fetch}){
	const response = await fetch('https://dummyjson.com/products?limit=10');
	const productData = await response.json();
	const products = productData.products

	return {
		products
	};
}
