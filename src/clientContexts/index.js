"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthContextProvider from "./AuthContext";
import { ProtectedPages } from "@/app/ProtectedPages";

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
      <ProtectedPages>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ProtectedPages>
    </AuthContextProvider>
  );
}
