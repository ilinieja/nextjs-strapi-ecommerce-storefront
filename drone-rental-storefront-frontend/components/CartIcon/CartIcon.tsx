"use client";
import Link from "next/link";
import SvgIconCart from "../icons/SvgIconCart";
import { useContext } from "react";
import { CartContext } from "@/context/cart.context";

export default function CartIcon() {
  const { state } = useContext(CartContext);

  return (
    <Link href="/cart" className="relative">
      <SvgIconCart height="2rem" width="2rem" />
      {state.products.length > 0 && (
            <div className="absolute top-5 right-4 bg-dark text-light dark:bg-light dark:text-dark rounded-full px-2 min-w-[28px] min-h-[28px] grow flex items-center justify-center">
                <span className="text-center font-bold">
                    {state.products.length}
                </span>
            </div>
      )}
    </Link>
  );
}
