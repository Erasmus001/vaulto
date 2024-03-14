"use client";

import { IconFolder } from "@tabler/icons-react";
import Link from "next/link";
import dateFormat from "dateformat";
import { usePathname } from "next/navigation";

export function FolderCollectionsGrid({ folders }) {
  return (
    <div className="w-full p-4 grid xl:grid-cols-6 gap-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
      {folders?.map((folder) => (
        <Folder data={folder} key={folder?.id} />
      ))}
    </div>
  );
}

function Folder({ data }) {
  const pathname = usePathname();

  return (
    <Link
      href={`${pathname}/${data?.id}`}
      className="w-full rounded-md border border-gray-200 cursor-pointer flex items-start justify-start flex-col relative hover:bg-gray-200/30 ease-in-out"
    >
      <div className="w-full bg-gray-200/70 p-10 flex items-center justify-center">
        <span>
          <IconFolder size={70} stroke={1} color="gray" />
        </span>
      </div>
      <div className="w-full p-3 space-y-2">
        <h3 className="text-base first-letter:capitalize">
          {data?.folder_name}
        </h3>
        <p className="text-[13px] text-gray-500">
          {dateFormat(data?.createdAt, "longDate")}
        </p>
      </div>
    </Link>
  );
}
