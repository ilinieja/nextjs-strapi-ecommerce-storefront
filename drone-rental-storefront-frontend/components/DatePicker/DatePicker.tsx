"use client";

import { useState } from "react";
import { Popover } from "@headlessui/react";
import { cva } from "class-variance-authority";
import clsx from "clsx";
import { DateRange as DayPickerDateRange, DayPicker } from "react-day-picker";
import { usePopper } from "react-popper";

import defaultDatepickerStyles from "react-day-picker/dist/style.module.css";
import styles from "./DatePicker.module.css";
import SvgIconCalendar from "../icons/SvgIconCalendar";
import { add, format } from "date-fns";
import Button from "../Button/Button";
const applyLocalStyle = (className: keyof typeof defaultDatepickerStyles) => ({
  [className]: clsx(defaultDatepickerStyles[className], styles[className]),
});
const datePickerStyles = {
  ...defaultDatepickerStyles,
  ...applyLocalStyle("day"),
  ...applyLocalStyle("day_range_start"),
  ...applyLocalStyle("day_range_end"),
  ...applyLocalStyle("day_range_middle"),
  ...applyLocalStyle("day_outside"),
};

const popoverButtonClasses = cva(
  [
    "group",
    "rounded",
    "border",
    "border-dark/30",
    "dark:border-light/30",
    "px-4",
    "py-0",
    "whitespace-nowrap",
    "transition",
    "duration-200",
    "ease-in-out",
    "flex",
    "gap-4",
    "items-center",
    "justify-between",
  ],
  {
    variants: {
      intent: {
        primary: [
          "bg-light",
          "text-dark",
          "hover:bg-dark",
          "hover:text-light",
          "dark:bg-dark",
          "dark:text-light",
          "dark:hover:bg-light",
          "dark:hover:text-dark",
        ],
        "primary-active": [
          "bg-dark",
          "text-light",
          "dark:bg-light",
          "dark:text-dark",
        ],
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

const popoverPanelClasses = cva(
  [
    "z-10",
    "rounded",
    "border",
    "border-dark/30",
    "dark:border-light/30",
    "px-2",
    "pt-2",
    "bg-light",
    "dark:bg-dark",
    "flex",
    "flex-col",
  ],
  {
    variants: {
      intent: {
        primary: ["bg-light", "text-dark", "dark:bg-dark", "dark:text-light"],
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

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

export interface DatePickerProps {
  onDateRangeSelect: (dateRange: DayPickerDateRange | undefined) => void;
  selectedDateRange?: DayPickerDateRange;
  defaultDateRange?: CompleteDateRange;
  className?: string;
}

export default function DatePicker({
  onDateRangeSelect,
  selectedDateRange,
  defaultDateRange = {
    from: add(new Date(), { days: 2 }),
    to: add(new Date(), { days: 9 }),
  },
  className,
}: DatePickerProps) {
  let [referenceElement, setReferenceElement] = useState<HTMLElement | null>();
  let [popperElement, setPopperElement] = useState<HTMLElement | null>();

  const [selectedRange, setSelectedRange] = useState<
    DayPickerDateRange | undefined
  >(selectedDateRange ?? defaultDateRange);

  const handleRangeSelect = (dateRange: DayPickerDateRange | undefined) => {
    setSelectedRange(dateRange);
    onDateRangeSelect(dateRange);
  };

  const handleRangeClear = () => {
    handleRangeSelect(undefined);
  };

  const formatDateRange = (dateRange: DayPickerDateRange | undefined) => {
    if (!dateRange || !dateRange.from || !dateRange.to) {
      return "Select dates";
    }

    return `${format(dateRange.from!, "d MMM")} - ${format(
      dateRange.to!,
      "d MMM"
    )}`;
  };

  let { styles: popperStyles, attributes } = usePopper(
    referenceElement,
    popperElement,
    {
      placement: "top",
      modifiers: [
        {
          name: "preventOverflow",
          options: {
            rootBoundary: "document",
            padding: 20,
          },
        },
        { name: "offset", options: { offset: [0, 12] } },
      ],
    }
  );

  return (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button
            ref={setReferenceElement}
            className={clsx(
              className,
              popoverButtonClasses({
                intent: open ? "primary-active" : "primary",
              })
            )}
          >
            <span className="py-2">{formatDateRange(selectedRange)}</span>
            <div className="py-2 pl-4 self-stretch flex items-center justify-center border-l border-dark/30 dark:border-light/30 group-hover:border-light/30 dark:group-hover:border-dark/30 transition duration-200">
              <SvgIconCalendar />
            </div>
          </Popover.Button>

          <Popover.Panel
            ref={setPopperElement}
            className={popoverPanelClasses()}
            style={popperStyles.popper}
            {...attributes.popper}
          >
            {({ close: closePopover }) => (
              <DayPicker
                classNames={datePickerStyles}
                showOutsideDays
                fixedWeeks
                weekStartsOn={1}
                mode="range"
                selected={selectedRange}
                onSelect={handleRangeSelect}
                disabled={{ before: new Date() }}
                min={2}
                footer={
                  <div className="w-full flex mt-4 justify-end gap-2">
                    <Button onClick={handleRangeClear}>Clear</Button>
                    <Button onClick={() => closePopover()}>Save</Button>
                  </div>
                }
              />
            )}
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}
