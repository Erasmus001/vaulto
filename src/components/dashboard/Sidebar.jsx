"use client";

import { sidebarLinks } from "@/dummy";
import { Fragment } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <section className="w-full h-full flex items-start justify-start flex-col border-r border-gray-200">
      {/* Logo */}
      <div className="w-full h-16 border-b border-gray-200 flex items-center justify-center px-10">
        <h2 className="text-2xl font-semibold">Vaulto</h2>
      </div>

      <div className="w-full h-[calc(100vh-64px)] flex items-start justify-between flex-col pt-7">
        <nav className="w-full flex items-start justify-start flex-col flex-1">
          {sidebarLinks?.map((sidebarLink) => {
            const isActiveLink =
              pathname === sidebarLink?.href ||
              pathname.includes(sidebarLink?.href);

            return (
              <Link
                key={sidebarLink?.id}
                href={sidebarLink?.href}
                className={`w-full hover:bg-gray-200/70 hover:transition-all p-3 pl-7 text-sm ${
                  isActiveLink &&
                  "bg-gray-200 text-black font-medium hover:transition-transform border-l-4 border-black pl-[24px] hover:bg-gray-200"
                }`}
              >
                {sidebarLink?.title}
              </Link>
            );
          })}
        </nav>

        <Fragment>
          <Link
            href={"/dashboard/settings"}
            className={`w-full hover:bg-gray-200/70 hover:transition-all p-3 pl-7 text-sm`}
          >
            Settings
          </Link>
        </Fragment>
      </div>
    </section>
  );
}
