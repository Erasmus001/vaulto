import { pb } from "../../../../pocketbase/pocket-config";

export async function createNewFolder(folderData) {
  const { foldername, ownerId } = folderData;

  const data = await pb
    .collection("folders")
    .create({ folder_name: foldername, owner_id: ownerId, type: "Folder" });

  if (data?.created) {
    return {
      status: 201,
      message: "Folder created successfully",
      data: data,
    };
  }
}

export async function getAllFolders() {
  const data = await pb.collection("folders").getFullList({
    sort: "-created",
    expand: "files",
  });

  return data;
}
