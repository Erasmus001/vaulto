const API_ENDPOINT = process.env.API_ENDPOINT;

export async function POST(request) {
  const data = await request?.json();

  const { identity, password } = data;

  const authBody = {
    identity,
    password,
  };

  const record = await fetch(
    `${API_ENDPOINT}/api/collections/users/auth-with-password`,
    {
      method: "POST",
      body: JSON.stringify(authBody),
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
