import { API_ENDPOINT } from "@/components/constants";

export async function GET(request, { params }) {
  const folderId = await params?.folderId;

  const folder = await fetch(
    `${API_ENDPOINT}/api/collections/folders/records/${folderId}?fields=*`
  );

  const response = await folder?.json();

  if (response?.code === 400) {
    return Response.json({
      status: response?.code,
      message: response?.message,
    });
  }

  if (response?.code === 404) {
    return Response.json({
      status: response?.code,
      message: response?.message,
    });
  }

  return Response.json({
    status: 200,
    data: response,
  });
}
