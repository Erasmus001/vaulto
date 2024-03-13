import { API_ENDPOINT } from "@/components/constants";

export async function POST(request) {
  const authData = await request?.json();

  // Create user with credentials

  try {
    const response = await fetch(
      `${API_ENDPOINT}/api/collections/users/records`,
      {
        method: "POST",
        body: JSON.stringify(authData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // serialize the response data..
    const responseData = await response?.json();

    // const userResponse =
    //   (await responseData?.created) &&
    //   fetch(`${API_ENDPOINT}/api/collections/users/auth-with-password`, {
    //     method: "POST",
    //     body: JSON.stringify({
    //       email: authData?.email,
    //       password: authData?.password,
    //     }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });

    // const user = await userResponse?.json();

    if (responseData?.data?.email?.code === "validation_invalid_email") {
      return Response.json({
        status: responseData?.code,
        message: responseData?.data?.email?.message,
      });
    }

    return Response.json({
      status: 201,
      message: "Account created successfully",
    });
  } catch (error) {
    return Response.json({
      status: 500,
      message: "Something went wrong",
      data: error,
    });
  }
}
