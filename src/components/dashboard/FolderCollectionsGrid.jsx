import { IconFolder } from "@tabler/icons-react";
import Link from "next/link";

export function FolderCollectionsGrid({ folders }) {
  return (
    <div className="w-full p-4 grid grid-cols-6 gap-3">
      {folders?.map((folder) => (
        <Folder data={folder} key={folder?.id} />
      ))}
    </div>
  );
}

function Folder({ data }) {
  return (
    <Link
      href={`/dashboard/folders/${data?.id}`}
      className="w-full rounded-md border border-gray-200 p-10 cursor-pointer"
    >
      <div className="w-full bg-gray-200">
        <span>
          <IconFolder size={30} />
        </span>
      </div>
    </Link>
  );
}
