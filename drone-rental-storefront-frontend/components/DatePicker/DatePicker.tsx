"use client";

import { Fragment, Ref, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { cva } from "class-variance-authority";
import clsx from "clsx";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { usePopper } from "react-popper";

const popoverButtonClasses = cva(
  [
    "rounded",
    "border",
    "border-dark/30",
    "dark:border-light/30",
    "px-4",
    "py-2",
    "whitespace-nowrap",
    "transition",
    "duration-200",
    "ease-in-out",
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
    "backdrop-blur-xl",
    "bg-light/20",
    "dark:bg-dark/50",
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
  let { styles, attributes } = usePopper(referenceElement, popperElement, {
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
  });

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
            Date picker
          </Popover.Button>

          <Popover.Panel
            ref={setPopperElement}
            className={popoverPanelClasses()}
            style={styles.popper}
            {...attributes.popper}
          >
            <DayPicker
              showOutsideDays
              fixedWeeks
              weekStartsOn={1}
              mode="range"
            />
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}
