import { NEXT_API_ENDPOINT } from "@/components/constants";
import { handleResponse } from "@/helpers/handleSafeData";

export async function createNewFolder(foldername, owner) {
  const response = await fetch(`${NEXT_API_ENDPOINT}/folders/create`, {
    method: "POST",
    body: JSON.stringify({ foldername, owner }),
    headers: {
      "Content-type": "application/json",
    },
    next: {
      revalidate: ["folders"],
    },
  });

  const data = await handleResponse(response);
  return data;
}

export async function getAllFolders() {
  const response = await fetch(`${NEXT_API_ENDPOINT}/folders`, {
    method: "GET",
    cache: "no-store",
    next: { tags: ["folders"] },
  });
  const data = await handleResponse(response);
  return data;
}
