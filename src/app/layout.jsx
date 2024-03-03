import "./globals.css";
import "@mantine/core/styles.css";

import { Inter } from "next/font/google";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Toaster } from "sonner";

//* Vercel
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ClientContexts } from "@/clientContexts";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <MantineProvider>
          <ClientContexts>{children}</ClientContexts>
          <Toaster position="top-center" />
          <SpeedInsights />
        </MantineProvider>
      </body>
    </html>
  );
}
