'use client';

import { useContext } from "react";

import { CartContext } from "@/context/cart.context";
import Button from "@/components/Button/Button";

const CartCheckoutButton = () => {
  const { state } = useContext(CartContext);

  if (!state.products.length) {
    return null;
  }

  return <Button>Checkout</Button>;
};

export default CartCheckoutButton;
