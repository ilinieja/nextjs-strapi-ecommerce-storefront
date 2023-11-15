import clsx from "clsx";
import { PartialDateRange } from "@/lib/date";
import { getCurrencySymbol, getFormattedProductPrice } from "@/lib/price";

export default function ProductPrice({
  dateRange,
  price,
  currency,
  className,
}: {
  dateRange: PartialDateRange;
  price: number;
  currency: string;
  className?: string;
}) {
  const currencySymbol = getCurrencySymbol(currency);
  const totalPrice = getFormattedProductPrice(dateRange, price);

  return (
    <div
      className={clsx(
        className,
        "flex whitespace-nowrap items-center justify-center"
      )}
    >
      {currencySymbol}
      {totalPrice}
    </div>
  );
}
