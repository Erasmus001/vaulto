"use client";

import { Fragment } from "react";
import { useDisclosure } from "@mantine/hooks";
// import NewFolderModal from "@/components/dashboard/modals/NewFolderModal";
// import { Button } from "@/components/ui/Button";
import NewFolderIdModal from "@/components/dashboard/modals/NewFolderIdModal";
import { useParams } from "next/navigation";

export function FolderIdHeader({ total, title }) {
  const [
    isNewFolderModalOpened,
    { open: openNewFolderModal, close: closeNewFolderModal },
  ] = useDisclosure(false);

  const { folderId } = useParams();

  function handleClick() {
    openNewFolderModal();
  }

  return (
    <Fragment>
      <div className="w-full flex items-center justify-between px-7 h-20 border-b border-gray-200">
        <div className="flex items-center justify-center">
          <h2 className="text-2xl font-semibold">
            {title}{" "}
            <span className="text-lg text-gray-600">({`${total || 0}`})</span>
          </h2>
        </div>
        <div className="flex items-center justify-center gap-x-4">
          <button
            className="p-2 px-5 border rounded-md text-sm text-black"
            onClick={handleClick}
          >
            + Upload file
          </button>
          <button
            className="p-2 px-5 border rounded-md text-sm text-black"
            onClick={handleClick}
          >
            Create folder
          </button>
        </div>
      </div>
      <NewFolderIdModal
        isNewFolderModalOpened={isNewFolderModalOpened}
        closeNewFolderModal={closeNewFolderModal}
        folderId={folderId}
      />
    </Fragment>
  );
}
