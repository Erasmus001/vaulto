import { sidebarLinks } from "@/dummy";
import { Fragment } from "react";
import { Sidenavlink } from "./Sidenavlink";

export default function Sidebar() {
  return (
    <section className="w-full h-full flex items-start justify-start flex-col border-r border-gray-200">
      {/* Logo */}
      <div className="w-full h-16 border-b border-gray-200 flex items-center justify-center px-10">
        <h2 className="text-2xl font-semibold">Vaulto</h2>
      </div>

      <div className="w-full h-[calc(100vh-64px)] flex items-start justify-between flex-col pt-7">
        <nav className="w-full flex items-start justify-start flex-col flex-1">
          {sidebarLinks?.map((link) => (
            <Sidenavlink href={link?.href} title={link?.title} key={link?.id} />
          ))}
        </nav>

        <Fragment>
          <Sidenavlink href={"/dashboard/settings"} title={"Settings"} />
        </Fragment>
      </div>
    </section>
  );
}
