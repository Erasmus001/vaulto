"use client";

import { IconFolderOff } from "@tabler/icons-react";
import NewFolderModal from "./modals/NewFolderModal";
import { useDisclosure } from "@mantine/hooks";
import { Button } from "../ui/Button";

export function NoFoldersAvailable({ title, text, icon, href }) {
  const [
    isNewFolderModalOpened,
    { open: openNewFolderModal, close: closeNewFolderModal },
  ] = useDisclosure(false);

  function handleClick() {
    openNewFolderModal();
  }
  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-y-4 bg-gray-200/50 rounded-lg">
      <div className="flex items-center justify-center flex-col gap-y-3">
        <IconFolderOff size={70} color="#545353" />
        <h3 className="text-xl text-gray-600">
          {title || "No data available"}
        </h3>
      </div>
      <div>
        <Button
          title="Create new folder"
          pending={false}
          onClickHandler={handleClick}
        />
      </div>

      <NewFolderModal
        isNewFolderModalOpened={isNewFolderModalOpened}
        closeNewFolderModal={closeNewFolderModal}
      />
    </div>
  );
}
