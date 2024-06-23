import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

interface ProductCardProps {
  _id: string;
  name: string;
  price: number;
  image: string;
}

const ProductCard = ({ _id, name, price, image }: ProductCardProps) => {
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
      <div className="flex flex-col justify-between flex-1 bg-neutral-100 p-2 rounded-b-2xl overflow-hidden ">
        <h4 className="font-bold">{name}</h4>
        <div className="flex flex-row justify-between items-center flex-wrap">
          <p>${price}</p>
          <Button>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
