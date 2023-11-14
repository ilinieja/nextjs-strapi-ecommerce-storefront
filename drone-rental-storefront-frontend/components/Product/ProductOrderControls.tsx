"use client";
import { useContext, useState } from "react";

import { Product } from "@/lib/types";
import {
  AddedCartProduct,
  CartContext,
  isAddedCartProduct,
} from "@/context/cart.context";
import Button from "@/components/Button/Button";
import SvgCartIcon from "@/components/icons/SvgIconCartMini";
import DatePicker, {
  PartialDateRange,
  isCompleteDateRange,
} from "@/components/DatePicker/DatePicker";
import { add } from "date-fns";
import ProductPrice from "./ProductPrice";

export default function ProductOrderControls({
  product,
}: {
  product: Product | AddedCartProduct;
}) {
  const [dateRange, setDateRange] = useState<PartialDateRange>(
    (product as AddedCartProduct).dateRange ?? {
      from: add(new Date(), { days: 2 }),
      to: add(new Date(), { days: 9 }),
    }
  );

  const { dispatch } = useContext(CartContext);

  const handleAddToCartClick = () => {
    if (!isCompleteDateRange(dateRange)) {
      // TODO: Show date-range-invalid error.
      return;
    }

    dispatch({ type: "ADD_PRODUCT", product: { ...product, dateRange } });
  };

  const handleRemoveFromCartClick = () => {
    if (!isAddedCartProduct(product)) {
      // TODO: Log product-not-in-cart warning.
      return;
    }

    dispatch({
      type: "REMOVE_PRODUCT",
      product,
    });
  };

  const button = isAddedCartProduct(product) ? (
    <Button onClick={handleRemoveFromCartClick}>
      <SvgCartIcon />
      <span>Remove from cart</span>
    </Button>
  ) : (
    <Button onClick={handleAddToCartClick}>
      <SvgCartIcon />
      <span>Add to cart</span>
    </Button>
  );

  return (
    <div className="flex flex-col w-full mt-auto gap-4">
      <div className="flex w-full">
        <DatePicker
          className="flex-shrink-0"
          selectedDateRange={dateRange}
          onDateRangeSelect={setDateRange}
        />
        <ProductPrice
          className="flex-grow font-semibold lg:text-xl pl-2"
          dateRange={dateRange}
          price={+product?.attributes?.price}
          currency={product?.attributes?.priceCurrency?.toString()}
        />
      </div>
      {button}
    </div>
  );
}
