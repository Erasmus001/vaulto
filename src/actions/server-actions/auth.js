// "use server";

import { pb } from "../../../pocketbase/pocket-config";

// const SERVER_API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

// * Create a user with Email & Password
export async function createUserWithEmailAndPassword(authData) {
  const data = await pb.collection("users").create(authData);

  if (data?.created) {
    return {
      status: 201,
      message: "Account created successfully",
    };
  }
}

// * Log user in with Email & Password
export async function signinUserWithEmailAndPassword(authData) {
  const data = await pb
    .collection("users")
    .authWithPassword(authData?.email, authData?.password);

  return data;
}

// * Send user reset email link
export async function sendForgotPasswordEmail(formData) {}

// * Reset user password
export async function resetPassword(formData) {}
