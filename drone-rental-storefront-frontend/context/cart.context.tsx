"use client";

import React, { Dispatch, createContext } from "react";
import { useImmerReducer } from "use-immer";
import { v4 as uuidv4 } from 'uuid';

import { Product } from "@/lib/types";

export interface CartProduct extends Product {
  dateRange: { from: Date; to: Date };
}

export interface AddedCartProduct extends CartProduct {
  cartId: string;
}

export function isAddedCartProduct(product: Product): product is AddedCartProduct {
  return !!(product as AddedCartProduct).cartId;
}

type CartState = {
  products: AddedCartProduct[];
};

type CartAddAction = {
  type: "ADD_PRODUCT";
  product: CartProduct;
};

type CartRemoveAction = {
  type: "REMOVE_PRODUCT";
  product: AddedCartProduct;
};

type CartAction = CartAddAction | CartRemoveAction;

const initialState: CartState = {
  products: [],
};

const reducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      state.products.push({...action.product, cartId: uuidv4()});
      break;
    case "REMOVE_PRODUCT":
      state.products = state.products.filter(({ cartId }) => {
        return cartId !== action.product.cartId;
      });
      break;
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
