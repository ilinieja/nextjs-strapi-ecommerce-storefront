"use client";
import { useContext } from "react";

import { Product } from "@/lib/types";
import { CartContext } from "@/context/cart.context";
import Button from "@/components/Button/Button";
import SvgCartIcon from "@/components/icons/SvgIconCartMini";
import DatePicker from "@/components/DatePicker/DatePicker";

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
    <div className="flex flex-col w-full mt-auto gap-4">
      <div className="flex w-full">
        <DatePicker />
      </div>
      <Button onClick={handleAddToCartClick}>
        <SvgCartIcon />
        <span>Add to cart</span>
      </Button>
    </div>
  );
}
