"use client";

import { Menu, UnstyledButton } from "@mantine/core";
import { IconDotsVertical, IconTrash, IconEye } from "@tabler/icons-react";
import { usePathname, useRouter } from "next/navigation";

export function FolderDropdown({ openDeleteModal, href, openEditModal }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Menu shadow="md" width={180} radius={"md"}>
      <Menu.Target>
        <UnstyledButton className="hover:bg-gray-100 text-black w-fit p-[2px] hover:bg-gray-300/70 rounded-md absolute top-2 right-2">
          <IconDotsVertical stroke={0.5} color="black" />
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item className="cursor-pointer text-sm">
          <div
            className="w-full flex items-center justify-start gap-3"
            onClick={() => router.push(`${pathname}/${href}`)}
          >
            <IconEye size={16} />
            View
          </div>
        </Menu.Item>
        <Menu.Item className="cursor-pointer text-sm">
          <div
            className="w-full flex items-center justify-start gap-3"
            onClick={openEditModal}
          >
            <IconEye size={16} />
            Rename folder
          </div>
        </Menu.Item>

        <Menu.Item
          color="red"
          className="cursor-pointer text-sm"
          onClick={openDeleteModal}
        >
          <div className="w-full flex items-center justify-start gap-3">
            <IconTrash size={16} />
            Delete
          </div>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default FolderDropdown;
