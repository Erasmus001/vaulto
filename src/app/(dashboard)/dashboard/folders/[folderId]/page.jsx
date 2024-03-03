import { getFolder } from "@/actions/server-actions/folders";

export default async function FolderPage({ params }) {
  const folderId = params?.folderId;

  const folder = await getFolder(folderId);
  // console.log(folder);

  return <div>Folder Page</div>;
}
