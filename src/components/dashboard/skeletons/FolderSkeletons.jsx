import { Skeleton } from "@mantine/core";

export function FolderSkeletons() {
  return (
    <div className="w-full rounded-md border border-gray-200 cursor-pointer flex items-start justify-start flex-col">
      <div className="w-full h-[150px] flex items-center justify-center">
        <Skeleton width={"100%"} height={"100%"} />
      </div>
      <div className="w-full p-3 space-y-2">
        <div className="text-base first-letter:capitalize text-wrap">
          <Skeleton width={"100%"} height={20} />
        </div>
        <div className="text-sm text-gray-500">
          <Skeleton width={"70%"} height={20} />
        </div>
      </div>
    </div>
  );
}
