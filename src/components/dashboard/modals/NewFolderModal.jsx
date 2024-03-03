"use client";

import { useRef } from "react";
import { createNewFolder } from "@/actions/mutations/folder";
import { ModalButton } from "@/components/ui/Button";
import { Modal } from "@mantine/core";
import { toast } from "sonner";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useFormStatus } from "react-dom";

function NewFolderModal({ closeNewFolderModal, isNewFolderModalOpened }) {
  const queryClient = useQueryClient();

  const { pending } = useFormStatus();
  const folderNameRef = useRef(null);

  // * Create new folder mutation..
  const newFolderMutation = useMutation({
    mutationFn: async (foldername) => {
      const data = await createNewFolder(foldername);
      return data;
    },
    onSuccess: (data) => {
      if (data?.status === 400) {
        toast.error(data?.message);
        return;
      }

      if (data?.status === 201) {
        toast.success(data?.message);
        queryClient.invalidateQueries({ queryKey: ["folders"] });
        closeNewFolderModal();
      }
    },
  });

  // * Create new folder handler..
  async function handleCreateNewFolder(event) {
    event.preventDefault();
    const foldername = folderNameRef.current?.value;
    await newFolderMutation.mutate(foldername);
  }

  return (
    <Modal
      opened={isNewFolderModalOpened}
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
