"use client";

import { IconFolderOff } from "@tabler/icons-react";

export function NoDataAvailable({ title, text, icon, href }) {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-y-4 bg-gray-200/50 rounded-lg">
      <IconFolderOff size={50} color="#545353"/>
      <h3>{title || "No data available"}</h3>
    </div>
  );
}
