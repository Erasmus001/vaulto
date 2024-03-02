"use client";

import { useRef } from "react";
import { useFormStatus } from "react-dom";
import { createNewFolder } from "@/actions/client-actions/folders";
import { ModalButton } from "@/components/ui/Button";
import { Modal } from "@mantine/core";
import { toast } from "sonner";

function NewFolderModal({ closeNewFolderModal, isNewFolderModalOpened }) {
  const { pending } = useFormStatus();
  
  const folderNameRef = useRef(null);

  async function handleCreateNewFolder(event) {
    event.preventDefault();

    const foldername = folderNameRef.current?.value;

    const response = await createNewFolder(foldername);

    if (response?.status === 400) {
      console.log(response, "res-api");
      toast.error(response?.message);
      return;
    }

    if (response?.status === 201) {
      toast.success(response?.message);

      setTimeout(() => {
        closeNewFolderModal();
      }, 1000);
    }
  }

  return (
    <Modal
      opened={isNewFolderModalOpened}
      centered
      size={"md"}
      padding={"md"}
      radius={"md"}
      onClose={closeNewFolderModal}
      title="Create new folder"
    >
      <form
        onSubmit={handleCreateNewFolder}
        className="w-full flex items-start justify-start flex-col gap-y-4"
      >
        <div className="w-full flex items-start justify-start flex-col gap-1">
          <input
            type="text"
            name="folder-name"
            id="folder-name"
            required
            className="w-full py-2.5 px-3 rounded-md border border-gray-400/80"
            placeholder="Enter folder name..."
            ref={folderNameRef}
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <ModalButton
            title="Create folder"
            type={"submit"}
            pending={pending}
          />
        </div>
      </form>
    </Modal>
  );
}

export default NewFolderModal;
