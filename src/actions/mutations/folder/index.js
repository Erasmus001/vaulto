import { NEXT_API_ENDPOINT } from "@/components/constants";
import { handleResponse } from "@/helpers/handleSafeData";

export async function createNewFolder(foldername, owner) {
  const response = await fetch(`${NEXT_API_ENDPOINT}/folders/create`, {
    method: "POST",
    body: JSON.stringify({ foldername, owner }),
    headers: {
      "Content-type": "application/json",
    },
    cache: "reload",
  });

  const data = await handleResponse(response);
  return data;
}

export async function getAllFolders() {
  const response = await fetch(`${NEXT_API_ENDPOINT}/folders`, {
    method: "GET",
    cache: "no-store",
  });

  const data = await handleResponse(response);
  return data;
}

export async function searchFolder(query) {
  const response = await fetch(`${NEXT_API_ENDPOINT}/folders/search?query${query}`);

  const data = await handleResponse(response);
  console.log(data, "search data");
  return data;
}
