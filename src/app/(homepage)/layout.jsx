import "../globals.css";
import "@mantine/core/styles.css";

import { Inter } from "next/font/google";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Toaster } from "sonner";

// Vercel
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vaulto | School File Management",
  description: "Safeguard your schoolwork with Vaulto's reliable file storage and backup.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider>
          {children}
          <Toaster />
          <SpeedInsights />
        </MantineProvider>
      </body>
    </html>
  );
}
