"use client";

import { useQuery } from "@tanstack/react-query";
import { FolderIdHeader } from "./components/FolderIdHeader";
import { useParams } from "next/navigation";
import { getFolder } from "@/actions/mutations/folder";

function FolderPage() {
  const { folderId } = useParams();

  const { data } = useQuery({
    queryKey: ["folder", folderId],
    queryFn: async () => {
      const data = await getFolder(folderId);
      return data;
    },
  });

  return (
    <section className="w-full h-[calc(100vh-64px)] overflow-y-auto flex items-start justify-start">
      <div className="w-full">
        <FolderIdHeader title={data?.folder_name} />
      </div>
    </section>
  );
}

export default FolderPage;
