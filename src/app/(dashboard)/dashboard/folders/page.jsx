"use client";

import { getAllFolders } from "@/actions/mutations/folder";
import { NoFoldersAvailable } from "@/components/dashboard/EmptyStates";
import { FolderCollectionsGrid } from "@/components/dashboard/FolderCollectionsGrid";
import { FolderHeader } from "@/components/dashboard/FolderHeader";
import { Suspense, useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useQuery } from "@tanstack/react-query";
import { useDebouncedValue } from "@mantine/hooks";
import Error from "./error";
import { FolderSkeletons } from "@/components/dashboard/skeletons/FolderSkeletons";

function FoldersPage() {
  const [folders, setFolders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const debouncedSearchValue = useDebouncedValue(searchQuery, 1000);

  // * Fetch all collections/folders
  const { data, isLoading } = useQuery({
    queryKey: ["folders"],
    queryFn: async () => {
      const response = await getAllFolders();
      setFolders(response);
      return response;
    },
  });

  useEffect(() => {
    if (!debouncedSearchValue) {
      setFolders(data);
    }
  }, [debouncedSearchValue, data]);

  return (
    <section className="w-full h-full">
      <FolderHeader
        total={folders?.length}
        searchValue={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className="w-full h-[calc(100%-80px)]">
        <div className={`w-full h-full overflow-y-auto ${folders?.length > 1 ? "p-2" : "p-5"}`}>
          <ErrorBoundary fallback={<Error />}>
            <Suspense fallback={<FolderSkeletons />}>
              <div className="w-full grid grid-cols-6 gap-4 bg-blue-300">
                {isLoading &&
                  Array(12).map((item) => <FolderSkeletons key={item} />)}
              </div>

              {!isLoading && folders?.length >= 1 && (
                <FolderCollectionsGrid folders={folders} />
              )}

              {!isLoading && folders?.length < 1 && (
                <NoFoldersAvailable title={"No folders created"} />
              )}
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </section>
  );
}

export default FoldersPage;
