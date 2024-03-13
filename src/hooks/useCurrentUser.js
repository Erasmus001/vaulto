"use client";

import { useAuth } from "@/clientContexts/AuthContext";

export function useCurrentUser() {
  const { user } = useAuth();

  return user;
}

export function useCurrentUserToken() {
  const { token } = useAuth();
  
  console.log(token, "new-user");
  return token;
}
