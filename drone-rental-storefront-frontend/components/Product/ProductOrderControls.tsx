"use client";
import { useContext, useState } from "react";

import { Product } from "@/lib/types";
import { CartContext } from "@/context/cart.context";
import Button from "@/components/Button/Button";
import SvgCartIcon from "@/components/icons/SvgIconCartMini";
import DatePicker, { DateRange } from "@/components/DatePicker/DatePicker";
import { add } from "date-fns";
import ProductPrice from "./ProductPrice";

export default function ProductOrderControls({
  product,
}: {
  product: Product;
}) {
  const [dateRange, setDateRange] = useState<DateRange>({
    from: add(new Date(), { days: 2 }),
    to: add(new Date(), { days: 9 }),
  });

  const { dispatch } = useContext(CartContext);

  const handleAddToCartClick = () => {
    dispatch({ type: "ADD_PRODUCT", product: { ...product, dateRange } });
  };

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
      <Button onClick={handleAddToCartClick}>
        <SvgCartIcon />
        <span>Add to cart</span>
      </Button>
    </div>
  );
}
