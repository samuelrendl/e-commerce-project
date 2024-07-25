"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "@/components/shared/ProductCard";
import { Product } from "@/types/index";
import { fetchProductsByCategory } from "@/lib/dataFetching";
import { usePathname } from "next/navigation";

const CategoryPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      const categoryResult = pathname.split("/")[1].toString();
      const result = await fetchProductsByCategory(categoryResult);
      setProducts(result.map((product) => ({ ...product, imageUrls: [] })));
    };

    fetchData();
  }, [pathname]);

  return (
    <section className="container px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            _id={product._id}
            name={product.name}
            price={product.price}
            rating={product.rating}
            stock={product.stock}
            image={product.image}
            category={product.category}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoryPage;
