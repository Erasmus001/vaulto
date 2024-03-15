"use client";

import { useState } from "react";
import { updateFolder } from "@/actions/mutations/folder";
import { Modal } from "@mantine/core";
import { toast } from "sonner";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { FormButtonSubmit } from "@/components/ui/FormButton";
import { useAuth } from "@/clientContexts/AuthContext";

export function EditFolderModal({ closeEditModal, isEditModalOpened, folder }) {
  const [foldername, setFoldername] = useState(folder?.folder_name || "");

  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);

  // const { user } = useAuth();

  // console.log(folder);

  // * Edit folder mutation..
  const editFolderMutation = useMutation({
    mutationFn: async (obj) => {
      setIsLoading(true);

      const response = await updateFolder(obj);

      setIsLoading(false);

      return response;
    },
    onSuccess: (data) => {
      if (data?.status === 400) {
        toast.error(data?.message);
        setIsLoading(false)
        return;
      }

      if (data?.status === 201) {
        toast.success(data?.message);
        queryClient.invalidateQueries({ queryKey: ["folders"] });
        closeEditModal();
      }
    },
  });

  // * Edit folder handler..
  async function handleCreateNewFolder(event) {
    event.preventDefault();

    if (folder?.folder_name === foldername) {
      closeEditModal();
      return;
    }

    const data = {
      folder_name: foldername,
      owner_id: folder?.owner_id,
      type: folder?.type,
      file: folder?.file,
      folder_id: folder?.folder_id,
    };

    try {
      await editFolderMutation.mutateAsync({
        data,
        folderId: folder?.id,
      });
    } catch (error) {
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Modal
      opened={isEditModalOpened}
      size={"md"}
      padding={"md"}
      radius={"md"}
      onClose={closeEditModal}
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
            value={foldername}
            onChange={(event) => setFoldername(event.target.value)}
            className="w-full py-2.5 px-3 rounded-md border border-gray-400/80 first-letter:capitalize"
            placeholder="Enter folder name..."
            autoFocus={true}
            maxLength={30}
            minLength={2}
            title="Folder name should not be less than 2 or more than 30"
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <FormButtonSubmit isLoading={isLoading} title="Update folder" />
        </div>
      </form>
    </Modal>
  );
}
