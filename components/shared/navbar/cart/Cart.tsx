"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useStore } from "@/lib/hooks/useStore";
import CartItem from "./CartItem";
import { useState, useEffect } from "react";
import { Product } from "@/types";

const Cart = () => {
  const { cart, totalItems, totalPrice, clearCart } = useStore();

  const [cartState, setCartState] = useState<Product[]>([]);

  const total = cartState.reduce(
    (acc, product) => acc + product.price * (product.quantity as number),
    0
  );

  useEffect(() => {
    setCartState(cart);
  }, [cart]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="p-2">
          <ShoppingCartIcon className="size-6" />
          {totalItems}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white dark:bg-dark-200">
        <DropdownMenuLabel className="">Cart</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="flex flex-col gap-5 justify-center items-center">
          {cartState.map((product) => (
            <DropdownMenuItem key={product._id} asChild>
              <CartItem product={product} />
            </DropdownMenuItem>
          ))}
        </div>
        <DropdownMenuSeparator />
        <p>Total price: ${total}</p>
        <div className="flex justify-between">
          <Button variant={"outline"} onClick={clearCart}>
            Clear Cart
          </Button>
          <Button variant={"default"} onClick={clearCart}>
            Checkout
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Cart;
