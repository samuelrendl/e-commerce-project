"use server";

import { getProductByCategory } from "@/lib/actions/product.action";

export async function fetchProductsByCategory(category: string) {
  const result = await getProductByCategory({ category });

  return result.map((product) => ({
    _id: product._id.toString(),
    name: product.name,
    price: product.price,
    rating: product.rating,
    stock: product.stock,
    image: product.imageUrls[0],
    category: product.category,
  }));
}
