import { error } from "@sveltejs/kit";

export async function load({ fetch, params }) {
  console.log(params);

  const fetchProduct = async (artId) => {
    const res = await fetch(`https://dummyjson.com/products/${artId}`);
    if (!res.ok) {
      throw error(404, {
        message: "Artwork not found",
      });
    }
    const data = await res.json();
    return data;
  };

  return {
    artwork: await fetchProduct(params.artId),
  };
}
