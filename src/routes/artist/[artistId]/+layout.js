export async function load({ fetch, params }) {
  async function fetchProduct(artistId) {
    const res = await fetch(`https://dummyjson.com/users/${artistId}`);
    const data = await res.json();
    return data;
  }

  return {
    artist: fetchProduct(params.artistId),
  };
}
