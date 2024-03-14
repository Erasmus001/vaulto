"use client";

import { getAllFolders } from "@/actions/mutations/folder";
import { IconFile } from "@tabler/icons-react";
import { IconFolder } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import dateFormat from "dateformat";

function RecentsPage() {
  // * Fetch all collections/folders
  const { data: recentUploads, isLoading } = useQuery({
    queryKey: ["folders"],
    queryFn: async () => {
      const response = await getAllFolders();
      return response;
    },
  });

  return (
    <section className="w-full flex items-start justify-start flex-col gap-y-8 h-[calc(100vh-64px)] overflow-y-auto">
      <div className="w-full top-0 sticky z-50 left-0 bg-white h-16 py-7 px-5 flex items-center justify-start">
        <h3 className="text-2xl font-semibold">Recent uploads</h3>
      </div>

      <div className="w-full px-5 pb-6">
        {recentUploads?.map((upload) => (
          <RecentUploadList key={upload?.id} data={upload} />
        ))}
      </div>
    </section>
  );
}

export default RecentsPage;

function RecentUploadList({ data }) {
  return (
    <div className="p-4 px-6 flex items-start justify-start flex-col gap-2 bg-gray-100 hover:bg-gray-200/80 transition-colors border-b border-gray-300/70 last:border-b-transparent">
      <div className="w-full flex items-start justify-start gap-x-4 flex-1">
        <span>
          {data?.type === "Folder" ? (
            <IconFolder size={30} stroke={1} color="gray" />
          ) : (
            <IconFile size={30} stroke={1} color="gray" />
          )}
        </span>
        <div className="w-full flex items-start flex-col gap-y-1 flex-1">
          <h3 className="first-letter:capitalize text-gray-600">
            {data?.folder_name}
          </h3>
          <small className="text-xs text-gray-600 px-3 py-1 bg-gray-600/20 rounded-full">
            {data?.type}
          </small>
        </div>
        <div className="">
          <span className="text-sm text-gray-500">{dateFormat(data?.createdAt, "longDate")}</span>
        </div>
      </div>
    </div>
  );
}
