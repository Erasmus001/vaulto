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

export async function createNewIdFolder(folderData) {
  const { foldername, ownerId, folderId } = folderData;
  // console.log(folderData);
  // return;

  const data = await pb.collection("folders").create({
    folder_name: foldername,
    owner_id: ownerId,
    type: "Folder",
    folder_id: folderId,
  });

  if (data?.created) {
    return {
      status: 201,
      message: "Folder created successfully",
      data: data,
    };
  }

  return {
    status: 400,
    message: "Failed to create",
  };
}

export async function getAllFolders() {
  const data = await pb.collection("folders").getFullList({
    sort: "-created",
    expand: "files",
  });

  return data;
}

export async function getFolder(folderId) {
  const data = await pb.collection("folders").getOne(folderId);
  return data;
}

export async function deleteFolder(folderId) {
  const data = await pb.collection("folders").delete(folderId);
  console.log(data);
}
