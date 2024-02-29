const API_ENDPOINT = process.env.API_ENDPOINT;

export async function POST(request) {
  const data = await request?.json();

  const { identity, password } = data;

  // example create data
  const authBody = {
    email: identity,
    emailVisibility: true,
    password,
    passwordConfirm: password,
  };

  const record = await fetch(`${API_ENDPOINT}/api/collections/users/records`, {
    method: "POST",
    body: JSON.stringify(authBody),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await record?.json();

  console.log(response, "record response");

  return Response.json({
    status: response?.code,
    message: response?.message,
    data: response,
  });
}
