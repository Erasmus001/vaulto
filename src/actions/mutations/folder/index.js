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
    sort: "created",
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

  return {
    status: 200,
    message: "Folder deleted successfully",
  };
}

export async function updateFolder(obj) {
  const { data, folderId } = obj;

  const response = await pb.collection("folders").update(folderId, data);

  return {
    status: 201,
    message: "Folder updated successfully",
  };
}

export async function getInnerFolders(folderId) {
  const data = await pb.collection("folders").getFullList({
    filter: `(${folderId} = 'qh9bj1zy0jhs0r8')`,
  });

  console.log(data, 'api');

  return data
}
