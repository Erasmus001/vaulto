"use client";

import { Fragment } from "react";
import { Button } from "../ui/Button";
import NewFolderModal from "./modals/NewFolderModal";
import { useDisclosure } from "@mantine/hooks";

export function FolderHeader({ total, searchValue, setSearchQuery }) {
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
          <h2 className="text-2xl font-semibold">
            Collections{" "}
            <span className="text-lg text-gray-600">({`${total || 0}`})</span>
          </h2>
        </div>
        <div className="flex items-center justify-center gap-x-4">
          <form className="flex items-center justify-center overflow-hidden min-w-[300px]">
            <input
              type="search"
              name="search"
              placeholder="Search collections..."
              required
              className="w-full p-2.5 px-3 text-sm rounded-md border border-400"
              value={searchValue}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </form>
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
