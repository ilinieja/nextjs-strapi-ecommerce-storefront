"use client";
import { useContext } from "react";

import { CartContext } from "../../context/cart.context";
import Product from "../Product/Product";
import clsx from "clsx";

const CartProducts = ({ className }: { className: string }) => {
  const { state } = useContext(CartContext);

  return (
    <section
      className={clsx(
        className,
        "grid gap-6 grid-cols-4 md:grid-cols-8 lg:grid-cols-12 p-8 md:px-12"
      )}
    >
      {state.products.map((product) => (
        <Product className="col-span-4" key={product.cartId} product={product} />
      ))}
    </section>
  );
};

export default CartProducts;
