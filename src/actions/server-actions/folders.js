import { NEXT_API_ENDPOINT } from "@/components/constants";
import { handleResponse } from "@/helpers/handleSafeData";

export async function getFolder(folderId) {
  if (!folderId) {
    throw new Error("FolderId not provided");
  }

  const response = await fetch(`${NEXT_API_ENDPOINT}/folders/${folderId}`);
  const data = await handleResponse(response);

  return data;
}


