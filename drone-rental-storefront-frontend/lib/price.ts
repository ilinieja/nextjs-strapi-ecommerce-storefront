import numeral from "numeral";
import { differenceInDays } from "date-fns";

import { isCompleteDateRange, PartialDateRange } from "./date";

export function getProductPrice(
  dateRange: PartialDateRange,
  price: number
): number {
  const days = isCompleteDateRange(dateRange)
    ? differenceInDays(dateRange.to, dateRange.from)
    : 0;

  return price * days;
}

export function formatPrice(price: number): string {
  return numeral(price).format("0.[00]a");
}

export function getFormattedProductPrice(
  dateRange: PartialDateRange,
  price: number
): string {
  const days = isCompleteDateRange(dateRange)
    ? differenceInDays(dateRange.to, dateRange.from)
    : 0;
  const totalPrice = numeral(price * days).format("0.[00]a");
  return totalPrice;
}

const currencySymbolMap = {
  EUR: "€",
  USD: "$",
};

export function getCurrencySymbol(currency: string) {
  const currencySymbol =
    currencySymbolMap[currency as keyof typeof currencySymbolMap] ?? "";
  return currencySymbol;
}
