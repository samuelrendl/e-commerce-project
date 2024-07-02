import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getStockLevel } from "@/lib/utils";

import { StarIcon } from "@heroicons/react/24/outline";
import AddToCartButton from "./AddToCartButton";

interface ProductCardProps {
  _id: string;
  name: string;
  price: number;
  rating: number;
  stock: number;
  image: string;
  category: string;
}

const ProductCard = ({
  _id,
  name,
  price,
  rating,
  stock,
  image,
  category,
}: ProductCardProps) => {
  return (
    <div className="flex flex-col  bg-white text-dark-200 rounded-2xl border border-solid">
      <div className="flex justify-center items-center p-2 flex-1">
        <Link href={`/${category}/${_id}`}>
          <Image
            src={image}
            alt={name}
            width={500}
            height={500}
            className="max-h-56 object-contain"
            loading="lazy"
          />
        </Link>
      </div>
      <div className="flex flex-col justify-between border-t p-2 rounded-b-2xl overflow-hidden ">
        <h4 className="font-bold">{name}</h4>
        {/* <small className="flex flex-row items-center">
          <StarIcon className="h-4 w-4" />
          {rating} / 5
        </small> */}
        <p className={stock === 0 ? "text-red-600" : ""}>{getStockLevel(stock)}</p>
        <div className="flex flex-row justify-between items-center flex-wrap">
          <p>${price}</p>
          <AddToCartButton stock={stock} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
