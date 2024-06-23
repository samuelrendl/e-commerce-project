import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    _id: "1",
    name: "iPhone 15 Pro",
    price: 1499.99,
    image: "/products/apple/iphone/iphone15pro.png",
  },
  {
    _id: "2",
    name: "Galaxy S24 Ultra",
    price: 1399.99,
    image: "/products/samsung/galaxy/galaxyS24Ultra.png",
  },
  {
    _id: "3",
    name: "Xiaomi 14",
    price: 999.99,
    image: "/products/xiaomi/phone/xiaomi14.png",
  },
  {
    _id: "4",
    name: "Xiaomi 14",
    price: 999.99,
    image: "/products/xiaomi/phone/xiaomi14.png",
  },
];

const ProductsGrid = () => {
  return (
    <section className="w-full">
      <h3>Our Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            _id={product._id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsGrid;
