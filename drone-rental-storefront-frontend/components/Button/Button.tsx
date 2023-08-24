import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";

const buttonClasses = cva(
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
    "enabled:hover:scale-105",
    "enabled:focus:scale-105",
    "enabled:active:scale-100",
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
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonClasses> {}

const Button = ({ children, className, intent, ...props }: ButtonProps) => {
  return (
    <button className={clsx(buttonClasses({ intent, className }), "flex items-center justify-center gap-4")} {...props}>
      {children}
    </button>
  );
};

export default Button;
