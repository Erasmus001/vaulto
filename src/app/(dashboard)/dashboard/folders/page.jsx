"use client";

import { getAllFolders, searchFolder } from "@/actions/mutations/folder";
import { NoDataAvailable } from "@/components/dashboard/EmptyStates";
import { FolderCollectionsGrid } from "@/components/dashboard/FolderCollectionsGrid";
import { FolderHeader } from "@/components/dashboard/FolderHeader";
import { Suspense, useEffect, useRef, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useQuery } from "@tanstack/react-query";
import { FolderSkeletons } from "@/components/dashboard/skeletons/FolderSkeletons";
import { useMutation } from "@tanstack/react-query";
import { useDebouncedValue } from "@mantine/hooks";

export default function FoldersPage() {
  const [folders, setFolders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const debouncedSearchValue = useDebouncedValue(searchQuery, 1000);

  // * Fetch all collections/folders
  const { data, isLoading } = useQuery({
    queryKey: ["folders"],
    queryFn: async () => {
      const response = await getAllFolders();
      setFolders(response?.items);
      return response;
    },
  });

  // const { data: searchResults } = useQuery({
  //   queryKey: ["search-folders", debouncedSearchValue],
  //   queryFn: async () => {
  //     const response = await searchFolder(debouncedSearchValue);
  //     setFolders(response?.items);
  //     return response;
  //   },
  //   enabled: !debouncedSearchValue,
  // });

  // console.log(searchResults);

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

      {/* //* Folders view */}
      <div className="w-full h-[calc(100%-80px)] p-4 overflow-y-auto">
        <ErrorBoundary fallback={<p>Error occured</p>}>
          <Suspense>
            <div className="w-full grid grid-cols-6 gap-4 p-2">
              {isLoading &&
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item) => (
                  <FolderSkeletons key={item} />
                ))}
            </div>

            {folders?.items?.length < 1 ? (
              <NoDataAvailable />
            ) : (
              <FolderCollectionsGrid folders={folders} />
            )}
          </Suspense>
        </ErrorBoundary>
      </div>
    </section>
  );
}
