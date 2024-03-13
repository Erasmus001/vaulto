import "./globals.css";
import "@mantine/core/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Toaster } from "sonner";

//* Vercel
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ClientContexts } from "@/clientContexts";

export const metadata = {
  title: "Vaulto Cloud | File Management For Google Drive",
  description: "Access your google drive more easily and securely with Vaulto.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <ClientContexts>{children}</ClientContexts>
          <Toaster position="top-center" richColors />
          <SpeedInsights />
        </MantineProvider>
      </body>
    </html>
  );
}
