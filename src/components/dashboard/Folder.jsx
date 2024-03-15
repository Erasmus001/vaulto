"use client";

import { IconFolder } from "@tabler/icons-react";
import Link from "next/link";
import dateFormat from "dateformat";
import { usePathname } from "next/navigation";
import FolderDropdown from "../ui/FolderDropdown";
import { Fragment } from "react";
import { DeleteModal } from "./modals/DeleteModal";
import { useDisclosure } from "@mantine/hooks";
import { deleteFolder } from "@/actions/mutations/folder";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { EditFolderModal } from "./modals/EditFoldernameModal";

function Folder({ data }) {
  const pathname = usePathname();
  const queryClient = useQueryClient();

  const [
    isDeleteModalOpened,
    { open: openDeleteModal, close: closeDeleteModal },
  ] = useDisclosure(false);

  const [isEditModalOpened, { open: openEditModal, close: closeEditModal }] =
    useDisclosure(false);

  const handleDeleteFolderMutation = useMutation({
    mutationFn: async (id, newData) => {
      const response = await deleteFolder(data?.id, newData);
      return response;
    },
    onSuccess: () => {
      toast.success("Folder deleted successfully");
      queryClient.invalidateQueries(["folders"]);
    },
  });

  async function handleFolderDelete() {
    await handleDeleteFolderMutation.mutateAsync(data?.id);
  }

  return (
    <Fragment>
      <div className="w-full rounded-md border border-gray-200 cursor-pointer flex items-start justify-start flex-col relative hover:bg-gray-200/30 ease-in-out">
        <div className="w-full bg-gray-200/70 p-10 flex items-center justify-center relative">
          <span>
            <IconFolder size={70} stroke={1} color="gray" />
          </span>
          <FolderDropdown
            openDeleteModal={openDeleteModal}
            href={data?.id}
            openEditModal={openEditModal}
          />
        </div>
        <div className="w-full p-3 space-y-2">
          <Link
            href={`${pathname}/${data?.id}`}
            className="text-base capitalize"
          >
            {data?.folder_name}
          </Link>
          <p className="text-[13px] text-gray-500">
            {dateFormat(data?.createdAt, "longDate")}
          </p>
        </div>
      </div>

      {isDeleteModalOpened && (
        <DeleteModal
          opened={isDeleteModalOpened}
          onDelete={handleFolderDelete}
          onClose={closeDeleteModal}
        />
      )}

      {isEditModalOpened && (
        <EditFolderModal
          closeEditModal={closeEditModal}
          isEditModalOpened={isEditModalOpened}
          folder={data}
        />
      )}
    </Fragment>
  );
}

export default Folder;
