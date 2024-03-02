"use client";

import { Fragment } from "react";
import { Button } from "../ui/Button";
import NewFolderModal from "./modals/NewFolderModal";
import { useDisclosure } from "@mantine/hooks";

export function FolderHeader() {
  const [
    isNewFolderModalOpened,
    { open: openNewFolderModal, close: closeNewFolderModal },
  ] = useDisclosure(false);

  function handleClick() {
    openNewFolderModal();
  }

  return (
    <Fragment>
      <div className="w-full flex items-center justify-between px-7 h-20 border-b border-gray-200">
        <div className="flex items-center justify-center">
          <h2 className="text-2xl font-semibold">My Folders</h2>
        </div>
        <div className="flex items-center justify-center">
          <Button
            title="Create new folder"
            pending={false}
            onClickHandler={handleClick}
          />
        </div>
      </div>
      <NewFolderModal
        isNewFolderModalOpened={isNewFolderModalOpened}
        closeNewFolderModal={closeNewFolderModal}
      />
    </Fragment>
  );
}
