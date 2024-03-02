"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidenavlink({ href, title }) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`w-full hover:bg-gray-200/70 hover:transition-all p-3 pl-7 text-sm ${
        pathname === href
          ? "bg-gray-200 text-black font-medium hover:transition-transform border-l-4 border-black pl-[24px] hover:bg-gray-200"
          : ""
      }`}
    >
      {title}
    </Link>
  );
}
