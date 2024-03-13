import { API_ENDPOINT } from "@/components/constants";

export async function POST(request) {
  const authData = await request?.json();

  const record = await fetch(
    `${API_ENDPOINT}/api/collections/users/auth-with-password`,
    {
      method: "POST",
      body: JSON.stringify(authData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const response = await record?.json();
  console.log(response, "api");

  if (response?.data?.identity?.code === "validation_required") {
    return Response.json({
      status: response?.code,
      message: response?.data?.identity?.message,
    });
  }

  return Response.json({
    status: 200,
    message: "Login successful",
    data: response?.record,
    token: response?.token,
  });
}
