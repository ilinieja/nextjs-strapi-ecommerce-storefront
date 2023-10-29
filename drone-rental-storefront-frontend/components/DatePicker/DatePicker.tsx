"use client";

import { useState } from "react";
import { Popover } from "@headlessui/react";
import { cva } from "class-variance-authority";
import clsx from "clsx";
import { DateRange, DayPicker } from "react-day-picker";
import { usePopper } from "react-popper";

import defaultDatepickerStyles from "react-day-picker/dist/style.module.css";
import styles from "./DatePicker.module.css";
import SvgIconCalendar from "../icons/SvgIconCalendar";
import { add, format } from "date-fns";
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
    "justify-between"
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
    "px-4",
    "py-2",
    "bg-light",
    "dark:bg-dark",
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

export default function DatePicker() {
  let [referenceElement, setReferenceElement] = useState<HTMLElement | null>();
  let [popperElement, setPopperElement] = useState<HTMLElement | null>();

  const [selectedRange, setSelectedRange] = useState<DateRange|undefined>({
    from: add(new Date(), { days: 2 }),
    to: add(new Date(), { days: 9 }),
  });

  const formatDateRange = (dateRange: DateRange | undefined) => {
    if (!dateRange || !dateRange.from || !dateRange.to) {
      return 'Select dates';
    }

    return `${format(dateRange.from!, "d MMM")} - ${format(dateRange.to!, "d MMM")}`;
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
            <DayPicker
              classNames={datePickerStyles}
              showOutsideDays
              fixedWeeks
              weekStartsOn={1}
              mode="range"
              selected={selectedRange}
              onSelect={setSelectedRange}
              disabled={{ before: new Date() }}
            />
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}
