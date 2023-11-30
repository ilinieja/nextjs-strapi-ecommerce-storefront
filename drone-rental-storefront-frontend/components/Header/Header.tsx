'use client';

import Link from "next/link";
import clsx from "clsx";

import SvgIconDrone from "../icons/SvgIconsDrone";
import CartIcon from "../CartIcon/CartIcon";
import { usePathname } from "next/navigation";

const links = [
  {
    title: "Store",
    href: "/store",
  },
  {
    title: "Cart",
    href: "/cart",
  },
];

export default function Header({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <header className={clsx(className, "flex justify-center items-center border-b border-current backdrop-blur-md z-20 bg-light/70 dark:bg-dark/70")}>
      <div className="max-w-7xl w-full py-8 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
        <div className="col-span-1 flex items-center justify-center">
          <Link href="/">
            <SvgIconDrone height="2rem" width="2rem" />
          </Link>
        </div>
        <nav className="col-span-2 md:col-span-6 lg:col-span-10 flex items-center gap-4">
          {links.map(({ title, href }) => (
            <Link className={clsx("text-lg", {"border-b": pathname === href})} href={href}>{title}</Link>
          ))}
        </nav>
        <div className="col-span-1 flex items-center justify-center">
          <CartIcon />
        </div>
      </div>
    </header>
  );
}
