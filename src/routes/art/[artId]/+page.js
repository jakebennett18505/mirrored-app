/** @type {import('./$types').PageLoad} */
export async function load({fetch, params}) {
	console.log(params);

	const fetchProduct = async (artId) => {
		const res = await fetch(`https://dummyjson.com/products/${artId}`);
		const data = await res.json();
		return data;
	};

	return {
		artwork: fetchProduct(params.artId)
	};
}
