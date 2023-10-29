import { SVGProps } from "react";

const SvgIconCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M.833 10c0-3.457 0-5.186 1.075-6.26C2.98 2.667 4.71 2.667 8.167 2.667h3.666c3.457 0 5.186 0 6.26 1.075 1.074 1.073 1.074 2.802 1.074 6.259v1.833c0 3.457 0 5.186-1.075 6.26-1.073 1.073-2.802 1.073-6.259 1.073H8.167c-3.457 0-5.186 0-6.26-1.074C.834 17.02.834 15.29.834 11.833V10Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M5.417 2.667V1.292m9.166 1.375V1.292M1.291 7.25h17.417"
    />
    <path
      fill="currentColor"
      d="M15.5 14.583a.917.917 0 1 1-1.834 0 .917.917 0 0 1 1.834 0Zm0-3.666a.917.917 0 1 1-1.833 0 .917.917 0 0 1 1.833 0Zm-4.583 3.666a.917.917 0 1 1-1.834 0 .917.917 0 0 1 1.834 0Zm0-3.666a.917.917 0 1 1-1.833 0 .917.917 0 0 1 1.833 0Zm-4.584 3.666a.917.917 0 1 1-1.833 0 .917.917 0 0 1 1.833 0Zm0-3.666a.916.916 0 1 1-1.833 0 .916.916 0 0 1 1.833 0Z"
    />
  </svg>
);

export default SvgIconCalendar;
