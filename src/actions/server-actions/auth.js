"use server";

const SERVER_API_ENDPOINT = process.env.NEXT_API_URL;

// * Create a user with Email & Password
export async function createUserWithEmailAndPassword(formData) {
  let identity = formData.get("identity");
  let password = formData.get("password");

  const data = { identity, password };

  const _data = await fetch(`${SERVER_API_ENDPOINT}/signup`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const response = await _data?.json();
  return response;
}


// * Log user in with Email & Password

export async function signinUserWithEmailAndPassword(formData) {
  let identity = formData.get("identity");
  let password = formData.get("password");

  const data = { identity, password };

  const _data = await fetch(`${SERVER_API_ENDPOINT}/signin`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const response = await _data?.json();
  return response;
}


// * Send user reset email link
export async function sendForgotPasswordEmail(formData) {
  let email = formData.get("email");

  const _data = await fetch(`${SERVER_API_ENDPOINT}/forgot-password`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  const response = await _data?.json();
  return response;

  console.log(identity);
}


// * Reset user password
export async function resetPassword(formData) {
  let newPassword = formData.get("newPassword");
  let confirmNewPassword = formData.get("confirmNewPassword");
}
