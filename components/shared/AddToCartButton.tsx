import React from "react";
import { Button } from "../ui/button";

interface AddToCartButtonProps {
  stock: number;
  extraStyling?: string;
}

const AddToCartButton = ({ stock, extraStyling }: AddToCartButtonProps) => {
  return (
    <Button disabled={stock === 0 ? true : false} className={`${extraStyling} text-neutral-900`}>
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
