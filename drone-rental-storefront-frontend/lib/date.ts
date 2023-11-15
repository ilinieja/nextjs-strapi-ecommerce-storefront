import { DateRange as DayPickerDateRange } from "react-day-picker";

export function isCompleteDateRange(
  dateRange: DayPickerDateRange | undefined
): dateRange is CompleteDateRange {
  return !!dateRange && !!dateRange.from && !!dateRange.to;
}

export type CompleteDateRange = {
  from: Date;
  to: Date;
};

export type PartialDateRange = DayPickerDateRange | undefined;
