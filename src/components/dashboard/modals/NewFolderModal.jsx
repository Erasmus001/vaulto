"use client";

import { useRef, useState } from "react";
import { createNewFolder } from "@/actions/mutations/folder";
import { Modal } from "@mantine/core";
import { toast } from "sonner";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { FormButtonSubmit } from "@/components/ui/FormButton";
import { useAuth } from "@/clientContexts/AuthContext";

function NewFolderModal({ closeNewFolderModal, isNewFolderModalOpened }) {
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useAuth();

  const folderNameRef = useRef(null);

  // * Create new folder mutation..
  const newFolderMutation = useMutation({
    mutationFn: async (foldername) => {
      setIsLoading(true);
      const data = await createNewFolder(foldername);
      setIsLoading(false);

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

    try {
      await newFolderMutation.mutate({ foldername, ownerId: user?.id });
    } catch (error) {
      toast.error(error?.message);
    }
  }

  return (
    <Modal
      opened={isNewFolderModalOpened}
      size={"md"}
      padding={"md"}
      radius={"md"}
      onClose={closeNewFolderModal}
      title="Create New Folder"
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
            className="w-full py-2.5 px-3 rounded-md border border-gray-400/80 first-letter:capitalize"
            placeholder="Enter folder name..."
            ref={folderNameRef}
            autoFocus={true}
            maxLength={30}
            minLength={2}
            title="Folder name should not be less than 2 or more than 30"
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <FormButtonSubmit isLoading={isLoading} title="Create folder" />
        </div>
      </form>
    </Modal>
  );
}

export default NewFolderModal;
