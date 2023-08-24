import { SVGProps } from "react";

const SvgCartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={18}
    fill="none"
    viewBox="0 0 20 18"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M2.542 13.084c-.786-3.146-1.18-4.718-.354-5.776.825-1.058 2.448-1.058 5.69-1.058h4.244c3.243 0 4.864 0 5.69 1.058.826 1.057.433 2.63-.354 5.776-.5 2-.75 3-1.496 3.584-.746.582-1.777.582-3.84.582H7.878c-2.062 0-3.094 0-3.84-.582-.746-.583-.996-1.583-1.496-3.584Z"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="m16.875 6.708-.65-2.388c-.252-.921-.378-1.381-.635-1.729a2.291 2.291 0 0 0-1.007-.767c-.403-.157-.88-.157-1.833-.157M3.125 6.708l.65-2.388c.252-.921.378-1.381.635-1.729a2.292 2.292 0 0 1 1.007-.767c.403-.157.88-.157 1.833-.157"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M7.25 1.667A.917.917 0 0 1 8.167.75h3.666a.917.917 0 0 1 0 1.833H8.167a.917.917 0 0 1-.917-.916Z"
    />
  </svg>
);

export default SvgCartIcon;
