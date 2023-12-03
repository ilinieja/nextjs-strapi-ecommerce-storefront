"use client";
import Link from "next/link";
import SvgIconCart from "../icons/SvgIconCart";
import { useContext } from "react";
import { CartContext } from "@/context/cart.context";

export default function CartIcon() {
  const { state } = useContext(CartContext);

  return (
    <Link href="/cart" className="relative">
      <SvgIconCart height="28" width="28" />
      {state.products.length > 0 && (
            <div className="absolute top-4 right-3 bg-dark text-light dark:bg-light dark:text-dark rounded-full px-2 min-w-[28px] min-h-[28px] grow flex items-center justify-center">
                <span className="text-center font-bold">
                    {state.products.length}
                </span>
            </div>
      )}
    </Link>
  );
}
