import { differenceInDays } from "date-fns";
import { PartialDateRange, isCompleteDateRange } from "../DatePicker/DatePicker";
import numeral from "numeral";
import clsx from "clsx";

const currencySymbolMap = {
  EUR: "€",
  USD: "$",
};

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
  const days = isCompleteDateRange(dateRange) ? differenceInDays(dateRange.to, dateRange.from) : 0;
  const totalPrice = numeral(price * days).format("0.[00]a");
  const currencySymbol =
    currencySymbolMap[currency as keyof typeof currencySymbolMap] ?? "";

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
