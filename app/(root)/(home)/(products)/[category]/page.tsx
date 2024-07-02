"use client";

import ProductCard from "@/components/shared/ProductCard";
import { getProductByCategory } from "@/lib/actions/product.action";
import React from "react";
import { usePathname } from "next/navigation";

const CategoryPage = async () => {
  const pathname = usePathname();
  const categoryResult = pathname.split("/")[1].toString();
  console.log(categoryResult);

  const result = await getProductByCategory({
    category: categoryResult,
  });

  console.log(result);
  return (
    <section className=" container px-4">
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

export default CategoryPage;
