
export async function fetchProducts() {
    const response = await fetch("https://dummyjson.com/products?limit=20");
    const data = await response.json();
    const products = data.products;
    return products;
  }
  
  // Fetch and export the products immediately
  export const products = await fetchProducts();