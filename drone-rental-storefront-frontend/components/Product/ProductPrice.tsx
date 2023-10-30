import { differenceInDays } from "date-fns";
import { DateRange } from "../DatePicker/DatePicker";
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
  dateRange: DateRange;
  price: number;
  currency: string;
  className?: string;
}) {
  const days = differenceInDays(dateRange.to, dateRange.from);
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
