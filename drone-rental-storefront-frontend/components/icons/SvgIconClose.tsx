import { SVGProps } from "react";

const SvgIconClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m1 1 10 10M1 11 11 1"
    />
  </svg>
)

export default SvgIconClose
