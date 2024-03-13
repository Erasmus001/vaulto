import { API_ENDPOINT } from "@/components/constants";

export async function POST(request) {
  const { foldername, owner } = await request?.json();

  // example create data
  const folderBody = {
    folder_name: foldername,
  };

  const record = await fetch(
    `${API_ENDPOINT}/api/collections/folders/records`,
    {
      method: "POST",
      body: JSON.stringify(folderBody),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const response = await record?.json();

  console.log(response, "api");

  if (response?.data?.owner?.code === "validation_required") {
    return Response.json({
      status: response?.code,
      message: response?.data?.owner?.message,
    });
  }

  return Response.json({
    status: 201,
    message: "Folder created successfully",
    // data: response,
  });
}
