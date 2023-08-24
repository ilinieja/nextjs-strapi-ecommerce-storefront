"use client";
import { useContext } from "react";

import { Product } from "@/lib/types";
import { CartContext } from "@/context/cart.context";
import Button from "@/components/Button/Button";
import SvgCartIcon from "@/components/icons/SvgIconCartMini";

export default function ProductOrderControls({
  product,
}: {
  product: Product;
}) {
  const { dispatch } = useContext(CartContext);

  const handleAddToCartClick = () => {
    dispatch({ type: "ADD_PRODUCT", product });
  };

  return (
    <div className="flex flex-col w-full mt-auto">
      <Button onClick={handleAddToCartClick}>
        <SvgCartIcon />
        <span>Add to cart</span>
      </Button>
    </div>
  );
}
