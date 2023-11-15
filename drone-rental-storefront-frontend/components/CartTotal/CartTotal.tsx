"use client";

import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { formatPrice, getCurrencySymbol, getProductPrice } from "@/lib/price";

const CartTotal = () => {
  const { state } = useContext(CartContext);

  if (!state.products.length) {
    return <h2 className="text-2xl">Your cart is empty</h2>;
  }

  const totalPrice = state.products.reduce((total, product) => {
    return (
      total + getProductPrice(product.dateRange, +product.attributes.price)
    );
  }, 0);
  const currencySymbol = getCurrencySymbol(
    state.products[0].attributes.priceCurrency.toString()
  );

  return (
    <h2 className="text-2xl">
      Your cart: {currencySymbol}
      {formatPrice(totalPrice)}
    </h2>
  );
};

export default CartTotal;
