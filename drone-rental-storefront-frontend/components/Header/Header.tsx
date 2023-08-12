import Link from "next/link";
import clsx from "clsx";

import SvgIconDrone from "./icons/SvgIconsDrone";
import SvgIconCart from "./icons/SvgIconCart";

const links = [
  {
    title: "Drones",
    href: "/store",
  },
  {
    title: "Locations",
    href: "/locations",
  },
  {
    title: "Conditions",
    href: "/conditions",
  },
];

export default function Header({ className }: { className?: string }) {
  return (
    <header className={clsx(className, "flex justify-center items-center")}>
      <div className="max-w-7xl w-full py-4 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
        <div className="col-span-1 flex items-center justify-start">
          <Link href="/">
            <SvgIconDrone height="2rem" width="2rem" />
          </Link>
        </div>
        <nav className="col-span-2 md:col-span-6 lg:col-span-10 flex items-center gap-4">
          {links.map(({ title, href }) => (
            <Link className="text-lg" href={href}>{title}</Link>
          ))}
        </nav>
        <div className="col-span-1 flex items-center justify-end">
          <Link href="/cart">
            <SvgIconCart height="2rem" width="2rem"/>
          </Link>
        </div>
      </div>
    </header>
  );
}
