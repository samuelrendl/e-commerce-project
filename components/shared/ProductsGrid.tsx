import React from "react";
import ProductCard from "./ProductCard";
import { getAllProducts } from "@/lib/actions/product.action";

const ProductsGrid = async () => {
  const result = await getAllProducts({});

  return (
    <section className="w-full">
      <h3>Our Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {result.map((product) => (
          <ProductCard
            key={product._id}
            _id={product._id}
            name={product.name}
            price={product.price}
            rating={product.rating}
            stock={product.stock}
            image={product.imageUrls[0]}
            category={product.category}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsGrid;
