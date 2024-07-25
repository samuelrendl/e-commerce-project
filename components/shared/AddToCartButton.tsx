"use client";

import React, { MouseEvent } from "react";
import { Button } from "../ui/button";
import { Product } from "@/types";
import { useStore } from "@/lib/hooks/useStore";

interface AddToCartButtonProps {
  stock: number;
  extraStyling?: string;
  handleClick: Product;
}

const AddToCartButton = ({
  stock,
  extraStyling,
  handleClick,
}: AddToCartButtonProps) => {
  const { addToCart } = useStore();
  return (
    <Button
      disabled={stock === 0 ? true : false}
      className={`${extraStyling} text-neutral-900`}
      onClick={() => addToCart(handleClick)}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
