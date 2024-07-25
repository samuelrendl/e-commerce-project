import Link from "next/link";
import Image from "next/image";
import QuantityBox from "./QuantityBox";
import { Product } from "@/types";
import { useStore } from "@/lib/hooks/useStore";
import { Button } from "@/components/ui/button";
import { XMarkIcon } from "@heroicons/react/16/solid";

export interface CartItemProps {
  product: Product;
}

const CartItem = ({
  product: { _id, name, price, imageUrls, category },
}: CartItemProps) => {
  const { removeFromCart } = useStore();

  return (
    <div className="flex gap-2">
      <div className="flex justify-center items-center rounded-md">
        <Link href={`/${category}/${_id}`}>
          <Image src={imageUrls[0]} alt={name} width={60} height={60} />
        </Link>
      </div>
      <div className="flex flex-col justify-center gap-1">
        <h4 className="font-bold">{name}</h4>
        <QuantityBox />
        <p>${price}</p>
      </div>
      <div>
        <Button variant={"outline"} size={"icon"} className="size-5">
          <XMarkIcon className="size-3" />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
