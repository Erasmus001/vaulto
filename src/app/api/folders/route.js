import { API_ENDPOINT } from "@/components/constants";

export async function GET() {
  const record = await fetch(`${API_ENDPOINT}/api/collections/folders/records`);

  const response = await record?.json();

  if (response?.code === 400) {
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
