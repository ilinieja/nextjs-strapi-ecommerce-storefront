"use client";

import React, { Dispatch, createContext, useReducer } from "react";
import { useImmerReducer } from "use-immer";

import { Product } from "@/lib/types";

type CartState = {
  products: Product[];
};

type CartAction = {
  type: string;
  product: Product;
};

const initialState: CartState = {
  products: [],
};

const reducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      state.products.push(action.product);
      break;
    case "REMOVE_PRODUCT":
      state.products.filter(({id}) => id !== action.product.id);
      break;
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export const CartContext = createContext<{
  state: CartState;
  dispatch: Dispatch<CartAction>;
}>({ state: initialState, dispatch: () => null });

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
