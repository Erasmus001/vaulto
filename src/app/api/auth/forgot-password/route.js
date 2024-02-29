const API_ENDPOINT = process.env.API_ENDPOINT;

export async function POST(request) {
  const { email } = await request?.json();

  // console.log(JSON.stringify(email), "request");

  const record = await fetch(
    `${API_ENDPOINT}/api/collections/users/request-password-reset`,
    {
      method: "POST",
      body: JSON.stringify(email),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const response = await record?.json();

  return Response.json({
    status: response?.code,
    message: response?.message,
    data: response,
  });
}
