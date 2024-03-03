"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NextAuthSession from "./Providers";

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
    <NextAuthSession>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </NextAuthSession>
  );
}
