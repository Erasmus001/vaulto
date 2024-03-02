import { getAllFolders } from "@/actions/client-actions/folders";
import { FolderHeader } from "@/components/dashboard/FolderHeader";
import { FolderCollectionsGrid } from "@/components/dashboard/folderCollectionsGrid";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default async function FoldersPage() {
  const folders = await getAllFolders();

  return (
    <section className="w-full h-full">
      <FolderHeader />

      {/* //* Folders view */}
      <div className="w-full p-4">
        <ErrorBoundary fallback={<p>Error occured</p>}>
          <Suspense fallback={<>Loading...</>}>
            <FolderCollectionsGrid folders={folders?.items} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </section>
  );
}
