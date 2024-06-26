import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

import { StarIcon } from "@heroicons/react/24/outline";

interface ProductCardProps {
  _id: string;
  name: string;
  price: number;
  rating: number;
  stock: number;
  image: string;
}

const ProductCard = ({
  _id,
  name,
  price,
  rating,
  stock,
  image,
}: ProductCardProps) => {
  
  const getStockLevel = () => {
    if (stock === 0) {
      return "Out of stock";
    } else if (stock <= 5) {
      return `In stock: ${stock}`;
    } else if (stock > 5 && stock <= 10) {
      return "In stock: 5+";
    } else if (stock > 10 && stock <= 20) {
      return "In stock: 10+";
    } else if (stock > 20 && stock <= 50) {
      return "In stock: 20+";
    } else if (stock > 50 && stock <= 100) {
      return "In stock: 50+";
    } else {
      return "In stock: 100+";
    }
  };

  return (
    <div className="flex flex-col  bg-white text-dark-200 rounded-2xl border border-solid">
      <div className="flex justify-center items-center p-2">
        <Link href={`/products/${_id}`}>
          <Image
            src={image}
            alt={name}
            width={220}
            height={250}
            className="max-h-56 object-contain"
            loading="lazy"
          />
        </Link>
      </div>
      <div className="flex flex-col justify-between flex-1 border-t p-2 rounded-b-2xl overflow-hidden ">
        <h4 className="font-bold">{name}</h4>
        <small className="flex flex-row items-center">
          <StarIcon className="h-4 w-4" />
          {rating} / 5
        </small>
        <p className={stock === 0 ? 'text-red-600' : ''}>{getStockLevel()}</p>
        <div className="flex flex-row justify-between items-center flex-wrap">
          <p>${price}</p>
          <Button disabled={stock === 0 ? true : false}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
