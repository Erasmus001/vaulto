"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthContextProvider from "./AuthContext";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});
export function ClientContexts({ children }) {
  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </AuthContextProvider>
  );
}
