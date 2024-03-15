import Folder from "./Folder";

export function FolderCollectionsGrid({ folders }) {
  return (
    <div className="w-full p-4 grid xl:grid-cols-6 gap-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
      {folders?.map((folder) => (
        <Folder data={folder} key={folder?.id} />
      ))}
    </div>
  );
}
